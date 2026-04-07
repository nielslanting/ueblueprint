import http from "http"
import { createReadStream } from "fs"
import { stat } from "fs/promises"
import { extname, resolve as resolvePath, sep } from "path"

const mimeTypes = {
    ".css": "text/css",
    ".html": "text/html",
    ".js": "text/javascript",
    ".json": "application/json",
    ".woff2": "font/woff2",
}

export function checkServerReady(url) {
    return new Promise((resolve, reject) => {
        const request = http.get(url, res => {
            if (res.statusCode === 200) {
                resolve()
            } else {
                reject(new Error(`Server not ready, status code: ${res.statusCode}`))
            }
            res.resume()
        })

        request.on("error", error => reject(error))
        request.end()
    })
}

export function createStaticServer({ port, root = process.cwd() }) {
    return http.createServer(async (req, res) => {
        try {
            const url = new URL(req.url, `http://${req.headers.host}`)
            const requestedPath = resolvePath(root, `.${decodeURIComponent(url.pathname)}`)
            if (requestedPath !== root && !requestedPath.startsWith(`${root}${sep}`)) {
                res.writeHead(403)
                res.end()
                return
            }

            const filePath = (await stat(requestedPath)).isDirectory()
                ? resolvePath(requestedPath, "index.html")
                : requestedPath
            res.writeHead(200, {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": mimeTypes[extname(filePath)] ?? "application/octet-stream",
            })
            createReadStream(filePath).pipe(res)
        } catch (error) {
            res.writeHead(404)
            res.end()
        }
    })
}

export function startStaticServer({ port, root = process.cwd() }) {
    const url = `http://127.0.0.1:${port}/debug.html`

    return new Promise((resolve, reject) => {
        const server = createStaticServer({ port, root })
        server.addListener("error", async error => {
            if (error.code === "EADDRINUSE") {
                try {
                    await checkServerReady(url)
                    resolve(null)
                } catch (readinessError) {
                    reject(readinessError)
                }
                return
            }
            reject(error)
        })

        server.listen(port, "127.0.0.1", async () => {
            try {
                await checkServerReady(url)
                resolve(server)
            } catch (error) {
                server.close()
                reject(error)
            }
        })
    })
}

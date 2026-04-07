import { startStaticServer } from "./staticServer.js"

export default async function setup() {
    const port = Number(process.env.UEBLUEPRINT_TEST_SERVER_PORT ?? 8181)
    process.env.UEBLUEPRINT_TEST_SERVER_PORT = String(port)
    const server = await startStaticServer({ port })

    return async () => {
        await new Promise(resolve => server?.close(resolve) ?? resolve())
    }
}

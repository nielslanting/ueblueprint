import { copyFile, mkdir, readdir } from "node:fs/promises"
import { resolve } from "node:path"
import { defineConfig } from "vite"

function copyFonts() {
    return {
        name: "copy-fonts",
        async closeBundle() {
            const fontSource = resolve("assets/fonts")
            const fontTarget = resolve("dist/font")
            await mkdir(fontTarget, { recursive: true })
            for (const font of await readdir(fontSource)) {
                await copyFile(resolve(fontSource, font), resolve(fontTarget, font))
            }
        },
    }
}

const baseBuild = {
    lib: {
        entry: "src/export.ts",
        formats: ["es"],
    },
    rollupOptions: {
        external: [],
    },
}

export default defineConfig(({ mode }) => {
    const minified = mode === "minified"

    return {
        build: {
            ...baseBuild,
            emptyOutDir: false,
            minify: minified ? "terser" : false,
            lib: {
                ...baseBuild.lib,
                fileName: () => minified ? "ueblueprint.min.js" : "ueblueprint.js",
            },
        },
        plugins: [copyFonts()],
    }
})

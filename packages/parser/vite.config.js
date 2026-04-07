import { defineConfig } from "vite"

export default defineConfig({
    build: {
        lib: {
            entry: "src/export.js",
            formats: ["es"],
            fileName: () => "parser.js",
        },
        emptyOutDir: false,
        minify: false,
        rollupOptions: {
            external: ["parsernostrum"],
        },
    },
})

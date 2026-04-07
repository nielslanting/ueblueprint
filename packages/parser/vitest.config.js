import { defineConfig } from "vitest/config"

export default defineConfig({
    test: {
        include: ["tests/**/*.spec.js"],
        testTimeout: 30_000,
        hookTimeout: 30_000,
        pool: "forks",
    },
})

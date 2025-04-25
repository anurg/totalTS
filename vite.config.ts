import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";


// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '127.0.0.1',
        port: 3000,
    },
    test: {
        include: ["src/**/*.{ts,tsx}"],
        passWithNoTests: true,
        environment: "jsdom",
    },
    plugins: [tsconfigPaths()],
})
import { resolve, dirname } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(dirname(""), "index.html"),
                projects: resolve(dirname(""), "projects/index.html"),
            },
        },
    },
});

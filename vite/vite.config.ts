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
                blogs: resolve(dirname(""), "blogs/index.html"),
                'blogs/beginning': resolve(dirname(""), "blogs/beginning/index.html"),
                projects: resolve(dirname(""), "projects/index.html"),
                contact: resolve(dirname(""), "contact/index.html"),
            },
        },
    },
});

import { resolve, dirname } from "path";
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [VitePWA({
        registerType: 'autoUpdate',
    })],
    build: {
        rollupOptions: {
            input: {
                main: resolve(dirname(""), "index.html"),
                projects: resolve(dirname(""), "projects/index.html"),
            },
        },
    },
});

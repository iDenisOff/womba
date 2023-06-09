import dotenv from "dotenv";
import { defineConfig } from "vite";

import { config } from "./config";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    ...config,
    server: {
        port: Number(process.env.CLIENT_PORT) || 3000
    },
    define: {
        __SERVER_PORT__: process.env.SERVER_PORT || 3001
    }
});

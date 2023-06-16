import * as path from 'path';

import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: Number(process.env.CLIENT_PORT) || 3000
    },
    define: {
        __SERVER_PORT__: process.env.SERVER_PORT
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@ui/components': path.resolve(__dirname, './src/ui/components'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@types': path.resolve(__dirname, './src/types'),
            '@containers': path.resolve(__dirname, './src/containers'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@api': path.resolve(__dirname, './src/api'),
            '@controllers': path.resolve(__dirname, './src/controllers'),
            '@static': path.resolve(__dirname, './src/static')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "${path.resolve(__dirname, './src/_variables')}";`
            }
        }
    }
});

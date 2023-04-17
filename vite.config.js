import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from "@vitejs/plugin-react";
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server:{
        port:3000,
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh:[
                "resources/**",
            ]
        }),
    ],
});



import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server:{
        port:3000
    },
    plugins: [
        reactRefresh(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        reactRefresh(),
    ],
});



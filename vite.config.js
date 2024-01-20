import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from 'vite-jsconfig-paths'

export default defineConfig({
    base: '',
    plugins: [react(), jsconfigPaths()],
    server: {
        open: true, // this ensures that the browser opens upon server start
        port: 3007, // this sets a default port to 3007
    },
})

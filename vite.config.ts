import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    // Proxy API requests to the backend server during development
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8888',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/(.*)/, '/.netlify/functions/$1'),
        }
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: false
    }
  };
});
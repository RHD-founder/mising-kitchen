import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    base: command === 'serve' ? '/' : '/',
    define: {
      'process.env': { ...process.env, ...env }
    },
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
    },
    preview: {
      port: 3000,
      strictPort: true,
    },
    build: {
      outDir: 'build',
      emptyOutDir: true,
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
  };
});

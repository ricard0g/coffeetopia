import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: {
        'cart-toast': 'src/cart-toast/main.tsx',
      },
      output: {
        dir: 'assets/',
        entryFileNames: 'vite-[name].js',
        chunkFileNames: 'vite-[name].js',
        assetFileNames: 'vite-[name].[ext]',
      },
    },
    watch: {},
    emptyOutDir: false,
  },
});

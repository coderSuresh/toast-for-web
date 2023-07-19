import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: ['./src/index.ts', './src/styles.css'],
      name: 'toast-for-web',
    },
    rollupOptions: {
      output: {
        compact: false,
      },
    },
  },
});

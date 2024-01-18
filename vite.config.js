import { defineConfig } from 'vite'
import ReactRefresh from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default {
  plugins: [ReactRefresh()],
  jsx: 'react',
  build: {
    outDir: 'dist',
  },
};

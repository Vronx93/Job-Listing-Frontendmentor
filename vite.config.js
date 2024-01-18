import { defineConfig } from 'vite'
import ReactRefresh from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default {
  plugins: [ReactRefresh()],
  jsx: 'react', // Explicitly set the JSX option to 'react'
  build: {
    outDir: 'dist',
  },
};
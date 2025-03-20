import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Adjust this to your GitHub repository name
  build: {
    outDir: 'dist',  // Ensures the build goes to the 'dist' folder
  },
});

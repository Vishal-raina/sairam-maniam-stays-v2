import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sairam-maniam-stays-v2/',
  plugins: [react(), tailwindcss()],
});
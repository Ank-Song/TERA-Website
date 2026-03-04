import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Local dev/preview → base '/'
  // GitHub Actions deploy  → base '/TERA-Website/'
  base: process.env.GITHUB_ACTIONS ? '/TERA-Website/' : '/',
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  define: {
    'process.env.POD_NAME': JSON.stringify(process.env.POD_NAME),
    'process.env.POD_NAMESPACE': JSON.stringify(process.env.POD_NAMESPACE),
    'process.env.POD_IP': JSON.stringify(process.env.POD_IP),
    'process.env.NODE_NAME': JSON.stringify(process.env.NODE_NAME)
  }
})
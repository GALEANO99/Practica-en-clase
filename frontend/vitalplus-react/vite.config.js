import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

//crea ___dirname compatible con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// https://vite.dev/config/
export default defineConfig({
  plugins: 
  [react(),
    tailwindcss(),
  ],
  resolve:{
    alias: {
      '@': resolve(__dirname, 'src'), // cuando veas @, interpretalo como /src
    },
  },
})


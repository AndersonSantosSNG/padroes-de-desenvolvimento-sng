import { defineConfig } from 'vite'
import type { Plugin, HmrContext } from 'vite' // Modificado para type-only import
import react from '@vitejs/plugin-react'

// Plugin tipado de forma estrita para escutar mudanças em arquivos Markdown (.md)
const markdownHmrPlugin = (): Plugin => ({
  name: 'watch-markdown-changes',
  handleHotUpdate({ file, server }: HmrContext) {
    if (file.endsWith('.md')) {
      // Avisa o Vite que o módulo que faz o glob dos markdowns precisa ser recarregado
      server.ws.send({
        type: 'full-reload',
        path: '*'
      })
    }
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    markdownHmrPlugin()
  ],
})
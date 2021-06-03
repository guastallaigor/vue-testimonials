import type { UserConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
const path = require('path')

const config: UserConfig = {
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'lib'),
      },
    ],
  },
  plugins: [vue(), svgLoader()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'vue-testimonials',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
}

export default config

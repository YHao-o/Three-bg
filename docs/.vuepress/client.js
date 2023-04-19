import { defineClientConfig } from '@vuepress/client'
import Background2To3 from './components/Background2To3.vue'
// import { getDirname } from '@vuepress/utils'

// const __dirname = getDirname(import.meta.url)
export default defineClientConfig({
  // public: `${__dirname}/public`, //指定 Public 文件目录。
  enhance ({ app }) {
    app.component('Background2To3', Background2To3)
  },
})
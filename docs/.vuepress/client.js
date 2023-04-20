import { defineClientConfig } from '@vuepress/client'

import Background2To3 from '../componentsforDocs/Background2To3.vue'
export default defineClientConfig({
  enhance ({ app }) {
    app.component('Background2To3', Background2To3)
  },
})
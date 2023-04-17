import { createApp } from 'vue'
import App from './App.vue'
import '../components/css/background2To3.scss'
import Background2To3 from '../components/lib/Background2To3/src/index.js'
createApp(App).use(Background2To3).mount('#app')

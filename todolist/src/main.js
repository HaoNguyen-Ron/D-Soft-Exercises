import '@/assets/style/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import mitt from 'mitt'

const pinia = createPinia()
const emitter = mitt()

const app = createApp(App)

app.provide('emitter', emitter)
app.use(pinia)
app.mount('#app')

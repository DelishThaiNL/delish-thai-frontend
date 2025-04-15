import './assets/css/main.css'

import { createApp } from 'vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import i18n from '@/locales/i18n'

// import ApiService from '@/services/api.service'

// Set the base URL for the API service
// ApiService.init('https://67f2ac62ec56ec1a36d3d948.mockapi.io')

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(i18n)
app.use(pinia)
app.use(router)

app.mount('#app')

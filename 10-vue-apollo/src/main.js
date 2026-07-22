import { createApp } from 'vue'
import App from './app/App.vue'
import store from './app/store.js'

createApp(App)
  .provide('store', store)
  .mount('#app')

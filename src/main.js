import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css' // Import Quasar CSS
import router from './router' // Assuming your router is configured in 'router/index.js'
import { createPinia } from 'pinia'

// Create the Vue app
const app = createApp(App)

// Use Quasar
app.use(Quasar, {
  config: {},
})

// Use Pinia
const pinia = createPinia()
app.use(pinia)

// Use Vue Router
app.use(router)

// Mount the app
app.mount('#app')

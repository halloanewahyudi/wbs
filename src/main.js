import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import preline from 'preline'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(preline)
app.mount('#app')

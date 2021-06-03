import { createApp } from 'vue'
import App from './App.vue'
import VueTestimonials from './index'

const app = createApp(App)

app.use(VueTestimonials)
app.mount('#app')

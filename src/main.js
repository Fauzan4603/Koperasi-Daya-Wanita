import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'
import Contact from './pages/Contact.vue'
import Index from './pages/index.vue';
import Layanan from './pages/Layanan.vue';
import Tentang from './pages/Tentang.vue'

const routes = [
  { path: '/', name: "Home", component: Index },
  { path: '/contact', name: "Contact", component: Contact },
  { path: '/layanan', component: Layanan},
  { path: '/Home', component: Index},
  { path: '/tentang', component: Tentang},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


createApp(App)
  .use(router)
  .mount('#app')

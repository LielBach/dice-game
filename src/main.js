import './assets/main.css'
import 'primeicons/primeicons.css'


import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import App from './App.vue'
import router from './router'
import register_ui_components from './ui.config'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

register_ui_components(app)

app.mount('#app')

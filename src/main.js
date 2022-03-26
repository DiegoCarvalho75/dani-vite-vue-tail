import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import '@splidejs/splide/dist/css/splide.min.css'
import VueSplide from '@splidejs/vue-splide'

const app = createApp(App);
app.use(VueSplide);
app.mount('#app');

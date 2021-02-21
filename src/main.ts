import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { store, key } from './store'
import router from './router'

const hydrotabApp = createApp(App)

hydrotabApp.use(store, key);
hydrotabApp.use(router);

hydrotabApp.mount('#app')
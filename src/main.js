import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store';

const hydrotabApp = createApp(App).mount('#app')

hydrotabApp.use(store);
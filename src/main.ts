import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { fetchCache, key } from './store'
import router from './router'


fetchCache().then(store => {
  const hydrotabApp = createApp(App)
  console.log(store)
  hydrotabApp.use(store, key);
  hydrotabApp.use(router);
  hydrotabApp.mount('#app')
})

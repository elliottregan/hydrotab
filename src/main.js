import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { store, key } from './store';
const hydrotabApp = createApp(App);
hydrotabApp.use(store, key);
hydrotabApp.mount('#app');
//# sourceMappingURL=main.js.map
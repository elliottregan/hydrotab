import { createRouter, createWebHashHistory } from 'vue-router';

import Welcome from '../pages/Welcome.vue';
import Settings from '../pages/Settings.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Welcome,
  },
  {
    name: 'Settings',
    path: '/settings',
    component: Settings,
  },
]

export default createRouter({
  // createWebHashHistory is requored because WebHistory isn't available
  history: createWebHashHistory(),
  routes,
});
import { createRouter, createWebHashHistory } from 'vue-router';

import Welcome from '../pages/Welcome.vue';
import Settings from '../pages/Settings.vue';
import DrinkNotification from '../components/DrinkNotification.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Welcome,
  },
  {
    name: 'DrinkNotification',
    path: '/drink',
    component: DrinkNotification,
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
import { createRouter, createWebHashHistory } from 'vue-router';

import Welcome from '../pages/Welcome.vue';
import TopSites from '../pages/TopSites.vue';
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
    name: 'TopSites',
    path: '/topsites',
    component: TopSites,
  },
  {
    name: 'Settings',
    path: '/settings',
    component: Settings,
  },
]

export default createRouter({
  // createWebHashHistory is required because WebHistory isn't available
  history: createWebHashHistory(),
  routes,
});
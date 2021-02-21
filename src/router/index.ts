import { createRouter, createWebHistory } from 'vue-router';

import Welcome from '../pages/Welcome.vue';
import Settings from '../pages/Settings.vue';

const routes = [
  {
    path: '/',
    component: Welcome,
  },
  {
    path: '/settings',
    component: Settings,
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
});
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import AuroView from '@/views/AuroView.vue'
import TransitView from '@/views/TransitView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/work',
      name: 'ProjectsView',
      component: ProjectsView,
    },
    {
      path: '/auro',
      name: 'AuroView',
      component: AuroView,
    },
    {
      path: '/transit',
      name: 'TransitView',
      component: TransitView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      };
    }
    return { x: 0, y: 0 };
  },
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

/* MAIN PAGES IMPORT */
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import AboutView from '@/views/AboutView.vue'
import ArchiveView from '@/views/ArchiveView.vue'

/* PROJECTS IMPORT */
import AuroView from '@/views/AuroView.vue'
import BuildrView from '@/views/BuildrView.vue'
import ColliderView from '@/views/ColliderView.vue'
import HolycowView from '@/views/HolycowView.vue'
import KronolithView from '@/views/KronolithView.vue'
import MadeBrandbookView from '@/views/MadeBrandbookView.vue'
import OnyxView from '@/views/OnyxView.vue'
import TransitView from '@/views/TransitView.vue'
import TinyhouseView from '@/views/TinyhouseView.vue'
import LinedrawingsView from '@/views/LinedrawingsView.vue'


/* ROUTER SETUP */

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
      path: '/about',
      name: 'AboutView',
      component: AboutView,
    },
    {
      path: '/archive',
      name: 'ArchiveView',
      component: ArchiveView,
    },
    {
      path: '/auro',
      name: 'AuroView',
      component: AuroView,
    },
    {
      path: '/buildr',
      name: 'BuildrView',
      component: BuildrView,
    },
    {
      path: '/collider',
      name: 'ColliderView',
      component: ColliderView,
    },
    {
      path: '/holycow',
      name: 'HolycowView',
      component: HolycowView,
    },
    {
      path: '/kronolith',
      name: 'KronolithView',
      component: KronolithView,
    },
    {
      path: '/lines',
      name: 'LinedrawingseView',
      component: LinedrawingsView,
    },
    {
      path: '/made-digital-brand-book',
      name: 'MadeBrandbookView',
      component: MadeBrandbookView,
    },
    {
      path: '/onyx',
      name: 'OnyxView',
      component: OnyxView,
    },
    {
      path: '/tinyhouse',
      name: 'TinyhouseView',
      component: TinyhouseView,
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
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return savedPosition || { top: 0 };
  },
});

router.afterEach((to, from) => {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 150); // You can adjust the delay if needed
});

export default router

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Vue3Marquee from 'vue3-marquee';
import '../scss/main.scss';

// Import GSAP globally
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger globally if you still need it
gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.use(Vue3Marquee);
app.use(router);
app.mount('#app');

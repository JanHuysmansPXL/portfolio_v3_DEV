<template>
  <div>
    <header class="navbar">
      <!-- Correctly place ref on the <a> tag inside router-link -->
      <router-link to="/" class="jan" v-slot="{ href, navigate, isActive, isExactActive }">
        <a class="jan" :href="href" @click="navigate" ref="jan">JAN HUYSMANS</a>
      </router-link>

      <nav class="navbar-center">
        <ul class="navbar-menu">
          <li class="navbar-listitem"><router-link to="/work" class="navbar-link">{{ linkProjectsText }}</router-link>
          </li>
          <li class="navbar-listitem"><router-link to="/about" class="navbar-link">{{ linkAboutText }}</router-link></li>
          <li class="navbar-listitem"><router-link to="/archive" class="navbar-link">{{ linkArchiveText }}</router-link></li>
          <li class="navbar-listitem"><a class="navbar-link" href="mailto:jan_huysmans@outlook.com">Contact</a></li>
        </ul>
      </nav>
      <!-- Menu Toggle Button (visible on both mobile and desktop) -->
      <a class="menu-toggle" @click="toggleMenu">
        {{ isMenuOpen ? 'Close' : 'Menu' }}
      </a>
    </header>

    <SlideMenuComponent :isOpen="isMenuOpen" @close="closeMenu" />
  </div>
</template>

<script>
import SlideMenuComponent from './SlideMenuComponent.vue';

export default {
  components: {
    SlideMenuComponent,
  },
  data() {
    return {
      isMenuOpen: false,
      linkProjectsText: 'Work',
      linkAboutText: "About",
      linkArchiveText: "Archive",
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.updateNavbarVisibility();
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.updateNavbarVisibility();
    },
updateNavbarVisibility() {
  const navbarCenter = document.querySelector('.navbar-center');
  
  if (navbarCenter) {
    // Always keep the navbar visible when the menu is open
    if (this.isMenuOpen) {
      navbarCenter.classList.add('hidden');
      return;
    }
    
    // Show the navbar if the page is scrolled up (i.e., not at the top)
    if (window.scrollY > 120) {
      navbarCenter.classList.add('hidden');
    } else {
      // Hide navbar if we're at the top and no other conditions apply
      navbarCenter.classList.remove('hidden');
    }
  }
},
    adjustNavbarTextColor() {
      const navbar = document.querySelector('.navbar');
      const navbarStyle = getComputedStyle(navbar);
      const bgColor = navbarStyle.backgroundColor;

      const [r, g, b] = bgColor.match(/\d+/g).map(Number);
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b; // Formula for luminance

      if (luminance > 128) { // Light background
        navbar.classList.add('dark-text');
        navbar.classList.remove('light-text');
      } else { // Dark background
        navbar.classList.add('light-text');
        navbar.classList.remove('dark-text');
      }
    },
    updateText(e) {
      // Ensure 'jan' is defined before applying styles
      const jan = this.$refs.jan;
      if (jan) {
        const multiplierWidth = e.offsetX / window.innerWidth;
        const multiplierHeight = e.offsetY / window.innerHeight;

        // Adjust to valid ranges
        const randomWeight = Math.min(Math.max(multiplierWidth * (650 - 300) + 300, 100), 650);
        const randomItal = Math.min(Math.max(multiplierHeight * (1 - 0) + 0, 0), 1);

        // Apply the font variation settings to the logo
        jan.style.fontVariationSettings = `"wght" ${randomWeight}, "ital" ${randomItal}`;
      }
    }
  },
  mounted() {
    this.adjustNavbarTextColor();
    window.addEventListener('scroll', this.updateNavbarVisibility);
    window.addEventListener('mousemove', this.updateText);
  },
  beforeUnmount() { // Changed from beforeDestroy to beforeUnmount in Vue 3
    window.removeEventListener('scroll', this.updateNavbarVisibility);
    window.removeEventListener('mousemove', this.updateText);
  },
};
</script>

<style scoped lang="scss">
/* Scoped styles for navbar */
</style>

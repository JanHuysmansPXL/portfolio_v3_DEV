<template>
  <div :class="['slide-menu', { 'open': isOpen }]" @click.self="closeMenu">
    <div class="contact-info">
      <p class="contact-intro">
        Currently looking for a position at a leading creative agency. Send me an email with your request and I’ll get back to you in a jif.
      </p>
      <p class="contact-address txt-ss-body1">jan_huysmans@outlook.com</p>
      <p class="contact-address txt-ss-body1">Antwerp, Belgium.</p>
    </div>
    <div class="menu-content">
      <ul class="menu-list">
        <li class="menu-item">
          <router-link to="/" class="menu-link" @click.native="closeMenu">
            <span><img class="menu-arrow" src="/assets/arrow-right.png" /></span>Home
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/work" class="menu-link" @click.native="closeMenu">
            <span><img class="menu-arrow" src="/assets/arrow-right.png" /></span>Work
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/work" class="menu-link" @click.native="closeMenu">
            <span><img class="menu-arrow" src="/assets/arrow-right.png" /></span>About
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/work" class="menu-link" @click.native="closeMenu">
            <span><img class="menu-arrow" src="/assets/arrow-right.png" /></span>Archive
          </router-link>
        </li>
        <li class="menu-item">
          <a href="mailto:jan_huysmans@outlook.com" class="menu-link">
            <span><img class="menu-arrow" src="/assets/arrow-right.png" /></span>Get in touch
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closeMenu() {
        this.$emit('Close');
      },
    },
  };
  </script>
  

<style scoped lang="scss">



</style>

  
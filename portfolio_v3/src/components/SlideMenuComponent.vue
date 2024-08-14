<template>
  <div :class="['slide-menu', { 'open': isOpen }]" @click.self="closeMenu">
    <div class="contact-info">
      <p class="contact-intro">Currently looking for a position at a leading creative agency. Send me an email with your request and I’ll get back to you in a jif.</p>
      <p class="contact-address txt-ss-body1">jan_huysmans@outlook.com</p>
      <p class="contact-address txt-ss-body1">Antwerp, Belgium.</p>
    </div>
    <div class="menu-content">
      <ul class="menu-list">
        <li class="menu-item"><a href="#home" class="menu-link"><span><img class="menu-arrow" src="../assets/arrow-right.png"></span>Home</a></li>
        <li class="menu-item"><a href="#work" class="menu-link"><span><img class="menu-arrow" src="../assets/arrow-right.png"></span>Work</a></li>
        <li class="menu-item"><a href="#about" class="menu-link"><span><img class="menu-arrow" src="../assets/arrow-right.png"></span>About</a></li>
        <li class="menu-item"><a href="#archive" class="menu-link"><span><img class="menu-arrow" src="../assets/arrow-right.png"></span>Archive</a></li>
        <li class="menu-item"><a href="#contact" class="menu-link"><span><img class="menu-arrow" src="../assets/arrow-right.png"></span>Get in touch</a></li>
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

  
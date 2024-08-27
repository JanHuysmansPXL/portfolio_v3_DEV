<script>
export default {
  data() {
    return {
      viewAllText: "See all projects",
      projects: [
        {
          title: "MADE DIGITAL BRAND BOOK",
          year: 2024,
          details: "BRANDING / UI / UX / MOTION",
          image: "/assets/images/covers/coverimage.png",
          link: "/made-digital-brand-book",
        },
        {
          title: "KRONOLITH",
          year: 2024,
          details: "INTERFACE / Product Design / 3D Animation",
          image: "/assets/images/covers/coverimage-1.png",
          link: "/kronolith",
        },
        {
          title: "TINY HOUSE",
          year: 2023,
          details: "BRANDING / SOCIAL CONTENT",
          image: "/assets/images/covers/coverimage-4.png",
          link: "/tinyhouse",
        },
        {
          title: "BUILDR",
          year: 2023,
          details: "Branding / INTERFACE / UX",
          image: "/assets/images/covers/coverimage-2.png",
          link: "/buildr",
        },
        {
          title: "TRANSIT",
          year: 2020,
          details: "ART / SCULPTURE / INDUSTRIAL DESIGN",
          image: "/assets/images/projects/transit/transit-loop-animation-sm.gif",
          link: "/transit",
        },
      ],
      hoveredImage: null,
      imageStyles: {
        top: '0px',
        left: '0px',
      },
    };
  },
  methods: {
    showImage(image, event) {
      this.hoveredImage = image;
      this.updateImagePosition();
    },
    hideImage() {
      this.hoveredImage = null;
    },
    updateImagePosition() {
      // Get the dimensions of the screen
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Assuming the image size is approximately 400x400px for example
      const imageWidth = 400;
      const imageHeight = 400;

      // Calculate the center position
      const centerX = (windowWidth - imageWidth) / 2;
      const centerY = (windowHeight - imageHeight) / 2;

      // Update the imageStyles to center the image
      this.imageStyles = {
        top: `${centerY}px`,
        left: `${centerX}px`,
        position: 'fixed', // Ensures the image stays centered while scrolling
      };
    },
  },
};
</script>



<template>
  <section class="mt-lg">
    <!-- TITLE BOX-->
    <div class="selectedwork-title-box">
      <p class="selectedwork-title-text txt-nt-100">Selected work</p>
    </div>  

    <!-- WORK LIST-->
    <div class="work-list">
      <router-link
        v-for="(item, index) in projects"
        :key="index"
        :to="item.link"
        class="row"
        @mouseenter="showImage(item.image, $event)"
        @mouseleave="hideImage"
      >
        <div class="row-content">
          <div class="divider"></div>
          <div class="top-row"><span class="year txt-nt-60">{{ item.year }}</span></div>
          <div class="middle-row"><span class="title txt-nt-100">{{ item.title }}</span></div>
          <div class="bottom-row"><span class="details txt-nt-60">{{ item.details }}</span></div>
          <div class="divider"></div>
        </div>
      </router-link>

      <!-- Image container that appears on hover -->
      <transition name="image-fade">
        <div v-if="hoveredImage" :style="imageStyles" class="hover-image">
          <img :src="hoveredImage" alt="Project image" />
        </div>
      </transition>
    </div>
    
    <!-- LINK BOX -->
    <div class="selectedwork-title-box mt-xs">
      <router-link class="view-button-box" to="/work">
        <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
        <span class="link-text">{{ viewAllText }}</span>
      </router-link>
    </div>  
  </section>
</template>

<!-- -->
<style scoped lang="scss">
.hover-image {
  width: 400px; /* Or adjust to your image size */
  height: 400px; /* Adjust accordingly */
  position: fixed; /* Keep it fixed in the center */
  z-index: 1000; /* Ensure it appears above other content */
  pointer-events: none; /* Prevent the image from interfering with mouse events */
}
</style>


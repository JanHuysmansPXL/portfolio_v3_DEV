<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "MADE DIGITAL BRAND BOOK",
          year: 2024,
          details: "BRANDING / UI / UX / MOTION",
          image: "/assets/images/covers/coverimage.png", // path to your image
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
          title: "AURO",
          year: 2024,
          details: "UI / UX / Webdevelopment",
          image: "/assets/images/covers/coverimage-3.png", // path to your image
          link: "/auro",
        },
        {
          title: "BUILDR",
          year: 2023,
          details: "Branding / INTERFACE / UX",
          image: "/assets/images/covers/coverimage-2.png", // path to your image
          link: "/buildr",
        },
        {
          title: "TINY HOUSE",
          year: 2023,
          details: "BRANDING / SOCIAL CONTENT",
          image: "/assets/images/covers/coverimage-4.png",
          link: "/tinyhouse",
        },
        {
          title: "HOLY COW!",
          year: 2023,
          details: "BRANDING / UX / UI DESIGN",
          image: "/assets/images/covers/coverimage-5.png",
          link: "/holycow",
        },
        {
          title: "ONYX DISPLAY",
          year: 2023,
          details: "Typography / Font Design",
          image: "/assets/images/covers/coverimage-7.png", // path to your image
          link: "/buildr",
        },
        {
          title: "COLLIDER",
          year: "2020-2023",
          details: "ART / PRINT / AXIDRAW PLOT",
          image: "/assets/images/covers/coverimage-8.png",
          link: "/collider",
        },
        {
          title: "TRANSIT",
          year: 2020,
          details: "ART / SCULPTURE / INDUSTRIAL DESIGN",
          image: "/assets/images/projects/transit/transit-loop-animation-sm.gif",
          link: "/transit",
        },
        {
          title: "LINE DRAWINGS",
          year: "2017-2021",
          details: "ART / DRAWING",
          image: "/assets/images/covers/coverimage-9.png",
          link: "/collider",
        },
        // Add more projects as needed
      ],
      hoveredImage: null,
      imageStyles: {
        top: '0px',
        left: '0px',
      },
    };
  },
  methods: {
    showImage(image) {
      this.hoveredImage = image;
      this.updateImagePosition();
    },
    hideImage() {
      this.hoveredImage = null;
    },
    updateImagePosition() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Set image size based on screen width
  let imageWidth = 480;
  let imageHeight = 480;

  if (windowWidth < 768) {
    imageWidth = 320;
    imageHeight = 320;
  }

  // Calculate the centered position
  const centerX = (windowWidth - imageWidth) / 2;
  const centerY = (windowHeight - imageHeight) / 2;

  // Update the imageStyles to position the image at the center of the window
  this.imageStyles = {
    top: `${centerY}px`,
    left: `${centerX}px`,
    width: `${imageWidth}px`,
    height: `${imageHeight}px`,
    position: 'fixed', // Make sure the image is positioned relative to the viewport
  };
}
  },
};
</script>



<template>
  <section style="margin-top: -1px;">
    <div class="work-list">
      <router-link
        v-for="(item, index) in projects"
        :key="index"
        :to="item.link"
        class="row"
        @mouseenter="showImage(item.image)"
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
  </section>
</template>


<style scoped lang="scss">
.hover-image {
  width: 400px; /* Or adjust to your image size */
  height: 400px; /* Adjust accordingly */
  position: fixed; /* Keep it fixed in the center */
  z-index: 1000; /* Ensure it appears above other content */
  pointer-events: none; /* Prevent the image from interfering with mouse events */
}
</style>

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
          year: 2017-2021,
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
    showImage(image, event) {
      this.hoveredImage = image;
      this.updateImagePosition(event);
    },
    hideImage() {
      this.hoveredImage = null;
    },
    moveImage(event) {
      this.updateImagePosition(event);
    },
    updateImagePosition(event) {
      const offset = 40; // Offset the image from the mouse pointer
      this.imageStyles = {
        top: `${event.clientY - offset }px`,
        left: `${event.clientX + offset}px`,
      };
    },
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
      @mouseenter="showImage(item.image, $event)"
      @mouseleave="hideImage"
      @mousemove="moveImage($event)"
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

</style>

<template>
  <div class="carousel-wrapper">
    <div class="carousel-container">
      <div class="carousel">
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="['carousel-item', { active: currentSlide === index }]"
        >
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </div>
  </div>
  <div class="scroll-buttons">
      <button class="scroll-button prev" @click="prevSlide">
        <img class="scroll-arrow" src="../assets/arrow-right-link.png" alt="arrow">
      </button>
      <button class="scroll-button next" @click="nextSlide">
        <img class="scroll-arrow" src="../assets/arrow-right-link.png" alt="arrow">
      </button>
    </div>

    <!-- CTA BUTTON -->
    <div class="cta-wrapper container-fluid">
      <div class="cta-buttonbar">
        <button class="cta-button">
          <img class="link-arrow" src="../assets/arrow-right-link.png" alt="arrow">
          <a href="/assets/images/projects/buildr/buildr_brandguide.pdf" target="_blank" type="download" class="link-text">{{ buttonWebsiteText }}</a>
        </button>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      buttonWebsiteText: "Download the Brandguide PDF",
      currentSlide: 0,
      images: [
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook1.jpg", alt: "Buildr Brandbook Page 1" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook2.jpg", alt: "Buildr Brandbook Page 2" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook3.jpg", alt: "Buildr Brandbook Page 3" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook4.jpg", alt: "Buildr Brandbook Page 4" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook5.jpg", alt: "Buildr Brandbook Page 5" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook6.jpg", alt: "Buildr Brandbook Page 6" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook7.jpg", alt: "Buildr Brandbook Page 7" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook8.jpg", alt: "Buildr Brandbook Page 8" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook9.jpg", alt: "Buildr Brandbook Page 9" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook10.jpg", alt: "Buildr Brandbook Page 10" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook11.jpg", alt: "Buildr Brandbook Page 11" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook12.jpg", alt: "Buildr Brandbook Page 12" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook13.jpg", alt: "Buildr Brandbook Page 13" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook14.jpg", alt: "Buildr Brandbook Page 14" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook15.jpg", alt: "Buildr Brandbook Page 15" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook16.jpg", alt: "Buildr Brandbook Page 16" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook17.jpg", alt: "Buildr Brandbook Page 17" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook18.jpg", alt: "Buildr Brandbook Page 18" },
          { src: "/assets/images/projects/buildr/buildrBrandbook/buildrBrandbook19.jpg", alt: "Buildr Brandbook Page 19" },
        // Add all other image objects here
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>
.carousel-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  width: 100%;
  height: auto;
}

.carousel-container {
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin-bottom: 16px;
}

.carousel {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.carousel-item {
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.56,0.25,0.33,0.75), transform 0.3s cubic-bezier(0.56,0.25,0.33,0.75);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: scale(1.04); /* Slightly zoomed out initially */
}

.carousel-item.active {
  opacity: 1;
  transform: scale(1);
  position: relative;
  z-index: 2;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
}
@media (max-width: 768px) {
  .carousel-wrapper {
    padding: 0 16px; /* Reduce padding for smaller screens */
  }
}
</style>
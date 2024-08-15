<template>
  <div id="pagewrapper">
    <main class="maintest">


<!-- FULL IMAGE  -->
      <div class="container-fluid">
          <img class="img-fluid project-heading-img" src="/assets/images/projects/auro/auro-heading@x2.png" alt="An image of the made icon graphic language">
      </div>

<!-- TITLE BLOCK  -  1. WORDMARK -->
      <section id="AuroHead" class="project-title-block bg-nt-10 pb-lg">
      <h4 class="project-title-block-title txt-ss-h2">Auro</h4>
      <!-- INFO SECTION -->
      <div class="project-info-block mt-sm">
        <div class="about-block">
          <p class="about-text txt-ss-sub2 txt-gr-50">About</p>
        </div>
        <div class="intro-block">
          <h6 class="intro-title txt-ss-h6">Webdesign and development of a wearables brand, powered by Midjourney.</h6>
          <p class="intro-subtitle txt-ss-body1">Lorem ipsum dolor sit amet consectetur. At posuere aliquet sit sagittis ornare id cras magna. Pellentesque tincidunt enim aliquam elit .Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div class="details-block">
          <h5 class="details-title txt-ss-sub2">Branding / Social Marketing</h5>
          <div class="details-wrap">
            <div class="detail-bar">
              <div class="text-wrap">
                <p class="bar-text">Platform</p>
                <p class="bar-text">Web, Craft CMS, Wordpress</p>
              </div>
              <div class="text-wrap">
                <p class="bar-text">Role</p>
                <p class="bar-text">Designer / Developer</p>
              </div>
              <div class="text-wrap">
                <p class="bar-text">Cliënt</p>
                <p class="bar-text">PXL Digital*</p>
              </div>
              <div class="text-wrap">
                <p class="bar-text">Website</p>
                <a class="bar-text">View website</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>




<!-- 01 / POSTS  -->
      <div class="mini-title-container bg-gr-80">
        <div class="mini-title-box pt-md">
          <p class="mini-title-label txt-nt-15">What is Auro ?</p>
        </div>
      </div>

<!-- Info Block - Socials -->
      <section class="quote-block bg-gr-80">
        <h4 class="quote-block-text-half txt-ss-h4 txt-nt-10">
          Auro is a fictional wearables brand with a futuristic product line.
        </h4>
      </section>

      <!-- CAROUSEL SLIDER FOR INSTA SLIDES GRID  -->

      <div class="container-fluid py-xl bg-gr-80">
        <p class="txt-ss-body1 txt-nt-10 mb-sm ms-md">Carousel slider example</p>
        <div class="grid-images-wrapper" ref="imageWrapper">
          <div class="grid-box"><img class="grid-image"
              src="../assets/images/socials/carousel-cases/carousel-case-1.png" alt=""></div>
          <div class="grid-box"><img class="grid-image"
              src="../assets/images/socials/carousel-cases/carousel-case-2.png" alt=""></div>
          <div class="grid-box"><img class="grid-image"
              src="../assets/images/socials/carousel-cases/carousel-case-3.png" alt=""></div>
          <div class="grid-box"><img class="grid-image"
              src="../assets/images/socials/carousel-cases/carousel-case-4.png" alt=""></div>
          <div class="grid-box"><img class="grid-image"
              src="../assets/images/socials/carousel-cases/carousel-case-5.png" alt=""></div>
          <div class="grid-box"><img class="grid-image"
              src="../assets/images/socials/carousel-cases/carousel-case-6.png" alt=""></div>
        </div>
        <div class="scroll-buttons">
          <button class="scroll-button prev" @click="scrollPrev">
            <Atlas icon="ArrowLeft" :size="16" />
          </button>
          <button class="scroll-button next" @click="scrollNext">
            <Atlas icon="ArrowRight" :size="16" />
          </button>
        </div>
      </div>




      <!-- SUGGESTION BAR -->
      <div class="suggestion-bar mt-lg">
        <router-link to="/" class="suggestion-link">
          <span class="arrow-box"><img class="link-arrow" src="/assets/arrow-right-purple.png" /></span>Suggestion
        </router-link>
      </div>

      <!-- MARQUEE BAR -->
      <MarqueeBar />

      <!-- FOOTER -->
      <FooterComponent />

    </main>
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";

export default {
  data() {
    return {
      projects: [
        {
          title: "Made Digital Brand Book",
          image: '/assets/images/covers/coverimage.png',
          icon: null,
          description: "How I defined, designed and delivered an interactive online brand guide for the new Made brand identity.",
        },
        {
          title: "Kronolith",
          image: '/assets/images/covers/coverimage-1.png',
          icon: '/assets/images/square-dont.png',
          description: "Design and 3D-animation of a wall-mounted clock.",
        },
        {
          title: "Buildr",
          image: '/assets/images/covers/coverimage-2.png',
          icon: null,
          description: "Guiding a group of young designers to design and develop an accessible job matching platform.",
        },
        {
          title: "Auro",
          image: '/assets/images/covers/coverimage-3.png',
          icon: null,
          description: "Webdesign and development for an imaginative wearables brand, powered by Midjourney.",
        },
        {
          title: "Tiny House",
          image: '/assets/images/covers/coverimage-4.png',
          icon: '/assets/images/square-dont.png',
          description: "Inspiring people to live smaller trough joyful branding.",
        },
        {
          title: "Holy Cow!",
          image: '/assets/images/covers/coverimage-5.png',
          icon: null,
          description: "How I designed an offbeat burger chain brand and app.",
        },
        {
          title: "Transit",
          image: '/assets/images/covers/coverimage-6.png',
          icon: null,
          description: "3D-sculptures for Transit, a techno/house-event with headliners like Mall Grab.",
        },
        {
          title: "Onyx",
          image: '/assets/images/covers/coverimage-7.png',
          icon: '/assets/images/square-dont.png',
          description: "A handmade font that rocks.",
        },
        {
          title: "Collider",
          image: '/assets/images/covers/coverimage-8.png',
          icon: null,
          description: "A collection of handmade drawings and Axidraw prints.",
        },
        {
          title: "Line Drawings",
          image: '/assets/images/covers/coverimage-9.png',
          icon: null,
          description: "A collection of intricate ballpoint drawings and colour studies.",
        },
        // Add more projects as needed...
      ],
    };
  },
  components: {
    FooterComponent,
    MarqueeBar,
  },
};
</script>

<style lang="scss">


</style>
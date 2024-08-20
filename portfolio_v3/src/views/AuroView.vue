<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";
import auroVideoHead from '/assets/images/projects/auro/auro-video-head.mp4';

export default {
  data() {
    return {
      vidOne: auroVideoHead,
      buttonWebsiteText: 'Auro Website',
    };
  },
  components: {
    FooterComponent,
    MarqueeBar,
  },
  methods: {
      getScrollWidth() {
        // Determine the screen width and return the appropriate scroll width
        if (window.innerWidth <= 768) {
          // Mobile size (360px width for mobile)
          return 376;
        } else {
          // Default size (416px for larger screens)
          return 416;
        }
      },
      scrollPrev() {
        // Use the calculated scroll width
        const scrollWidth = this.getScrollWidth();
        this.$refs.imageWrapper.scrollBy({ left: -scrollWidth, behavior: 'smooth' });
      },
      scrollNext() {
        // Use the calculated scroll width
        const scrollWidth = this.getScrollWidth();
        this.$refs.imageWrapper.scrollBy({ left: scrollWidth, behavior: 'smooth' });
      },
  }
};
</script>

<template>
  <div id="pagewrapper">
    <main class="maintest">


      <!-- FULL IMAGE  -->
      <div class="container-fluid">
        <img class="img-fluid project-heading-img" src="/assets/images/projects/auro/auro-heading@x2.png"
          alt="Auro project header">
      </div>

      <!-- TITLE BLOCK  -  1. WORDMARK -->
      <section id="AuroHead" class="project-title-block bg-nt-10">
        <h2 class="project-title-block-title">Auro</h2>
        <!-- INFO SECTION -->
        <div class="project-info-block mt-md">
          <div class="about-block">
            <p class="about-text txt-ss-sub2 txt-gr-50">About</p>
          </div>
          <div class="intro-block">
            <h6 class="intro-title txt-ss-h6">Webdesign and development of a wearables brand, powered by Midjourney.
            </h6>
            <p class="intro-subtitle txt-ss-body1">Lorem ipsum dolor sit amet consectetur. At posuere aliquet sit
              sagittis ornare id cras magna. Pellentesque tincidunt enim aliquam elit .Lorem ipsum dolor sit amet
              consectetur.</p>
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




      <!-- 01 / INTRO  -->
      <div class="mini-title-container bg-nt-100">
        <div class="mini-title-box pt-md">
          <p class="mini-title-label txt-nt-15">What is Auro ?</p>
        </div>
      </div>
      <!-- AURO INTRODUCTION -->
      <section class="quote-block bg-nt-100">
        <h4 class="quote-block-text-half txt-ss-h4 txt-nt-10">
          Auro is a fictional wearables brand with a futuristic product line.
        </h4>
        <p class="quote-block-text-half txt-ss-body1 txt-nt-10 mt-sm">The idea behind the Auro was to create a
          collection of high-tech wearables to complement contemporary lifestyles.</p>
      </section>

      <!-- CAROUSEL SLIDER FOR AURO PRODUCTS GRID  -->

      <div class="container-fluid py-xl bg-nt-100">
        <div class="grid-images-wrapper" ref="imageWrapper">
          <div class="grid-box"><img class="grid-image post" src="/assets/images/projects/auro/pods_1-min.png" alt="">
          </div>
          <div class="grid-box"><img class="grid-image post" src="/assets/images/projects/auro/pods_7-min.png" alt="">
          </div>
          <div class="grid-box"><img class="grid-image post" src="/assets/images/projects/auro/auroport_1-min.png"
              alt=""></div>
          <div class="grid-box"><img class="grid-image post" src="/assets/images/projects/auro/pods_1-min.png" alt="">
          </div>
          <div class="grid-box"><img class="grid-image post" src="/assets/images/projects/auro/pods_3-min.png" alt="">
          </div>
          <div class="grid-box"><img class="grid-image post" src="/assets/images/projects/auro/aurovision_2-min.png"
              alt=""></div>
        </div>
        <div class="scroll-buttons mt-sm">
          <button class="scroll-button prev" @click="scrollPrev">
            <img class="scroll-arrow" src="../assets/arrow-right-link.png" alt="arrow">
          </button>
          <button class="scroll-button next" @click="scrollNext">
            <img class="scroll-arrow" src="../assets/arrow-right-link.png" alt="arrow">
          </button>
        </div>
      </div>

      <!-- Heading Block - II -->
      <section class="quote-block bg-nt-100 pb-lg">
        <h4 class="quote-block-text-half txt-ss-h4 txt-nt-10">
          I used Midjourney to generate a consistent line of products that reflect the Auro philosophy.
        </h4>
        <p class="quote-block-text-half txt-ss-body1 txt-nt-10 mt-sm">Midjourney is an AI-tool to generate creative
          images. To visualise the Auro products I studied the use of advanced Midjourney settings. Experiments with
          prompting helped met to further align a total of 20 Auro products.</p>
      </section>

      <!-- FULL VIDEO  -->
      <div class="container-fluid bg-white">
        <video class="vid-pagewidth padded" autoplay loop playsinline muted>
          <source :src="vidOne" type="video/mp4"> Your browser does not support the video tag.
        </video>
      </div>

      <!-- Info Block - WEBSITE -->
      <section class="quote-block bg-white">
        <h4 class="quote-block-text-half txt-ss-h4 txt-nt-100">
          To develop the website I used Craft CMS, Vue and Wordpress.
        </h4>
        <p class="quote-block-text-half txt-ss-body1 txt-nt-100 mt-sm">This website was made as an exercise mostly. I
          developed
          the website three times. Once in Vue, another time with Wordpress and a third time with Craft CMS.</p>
      </section>

      <!-- CTA BUTTONS -->
      <div class="cta-wrapper container-fluid">
        <div class="cta-buttonbar">
          <button class="cta-button">
            <img class="link-arrow" src="../assets/arrow-right-link.png" alt="arrow">
            <a href="https://auro-future.com/" target="_blank" class="link-text">{{ buttonWebsiteText }}</a>
          </button>
        </div>
      </div>

      <div class="container-fluid mockup-center bg-nt-10 mt-md">
        <img class="mockup-image" src="/assets/images/projects/auro/auro-mockup-mobile-1.png" alt="arrow">
        <img class="mockup-image" src="/assets/images/projects/auro/auro-mockup-mobile-1.png" alt="arrow">
        <img class="mockup-image" src="/assets/images/projects/auro/auro-mockup-mobile-1.png" alt="arrow">
      </div>

      <!-- QUOTE BLOCK "" -->
      <section class="container-fluid bg-pp-30">
        <div class="quote-block-wrapper">
          <h6 class="txt-ss-h5">“I really enjoyed working on the Auro project. I’ve got some new AI-tricks up my sleeves.“</h6>
        </div>
      </section>

      <!-- NEXT PROJECT BAR -->
      <div class="next-project-bar">
        <router-link to="/tinyhouse" class="next-project-link">
          <span class="arrow-box"><img class="link-arrow" src="/assets/arrow-right-dark.png" /></span>Next Project
        </router-link>
      </div>

      <!-- MARQUEE BAR -->
      <MarqueeBar />

      <!-- FOOTER -->
      <FooterComponent />

    </main>
  </div>
</template>

<style lang="scss">


</style>


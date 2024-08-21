<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";

export default {
  data() {
    return {
      buttonWebsiteText: 'Auro Website',
    };
  },
  components: {
    FooterComponent,
    MarqueeBar,
  },
  methods: {
    scrollPrev() {
            this.$refs.imageWrapper.scrollBy({ left: -376, behavior: 'smooth' });
            },
            
    scrollNext() {
            this.$refs.imageWrapper.scrollBy({ left: 376, behavior: 'smooth' });
            },
    scrollPrevAlt() {
            this.$refs.imageWrapper2.scrollBy({ left: -376, behavior: 'smooth' });
            },
            
    scrollNextAlt() {
            this.$refs.imageWrapper2.scrollBy({ left: 376, behavior: 'smooth' });
            },
  }
};
</script>

<template>
  <div id="pagewrapper">
    <main class="maintest">

      <!-- HEADING COVER WITH SCREEN RESPONSIVE IMAGE (PICTURE) -->
      <div class="container-fluid">
        <picture>
          <source media="(max-width: 768px)" srcset="/assets/images/projects/collider/collider-cover-mobile.png" />
          <img class="img-fluid project-heading-img mid" src="/assets/images/projects/collider/collider-cover-1.png"
            alt="An image of the made icon graphic language">
        </picture>
      </div>


      <!-- TITLE BLOCK - *** COLLIDER *** -->
      <section id="ColliderHead" class="project-title-block bg-nt-10">
        <h2 class="project-title-block-title">Collider</h2>
        <!-- INFO SECTION -->
        <div class="project-info-block mt-md">
          <div class="about-block">
            <p class="about-text txt-ss-sub2 txt-gr-50">About</p>
          </div>
          <div class="intro-block">
            <h6 class="intro-title txt-ss-h6">Collider is a personal art project. I make prints and drawings based on
              repetitive patterns.</h6>
            <p class="intro-subtitle txt-ss-body1 txt-nt-60">Drawings and digital prints I made between 2018 and 2022.
              Prints were made on a Axidraw V3 drawing robot. Usually my work is based on a number-based approach.</p>
          </div>
          <div class="details-block">
            <h5 class="details-title txt-ss-sub2">Art / Drawing</h5>
            <div class="details-wrap">
              <div class="detail-bar">
                <div class="text-wrap">
                  <p class="bar-text">Year</p>
                  <p class="bar-text">2018-2022</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Role</p>
                  <p class="bar-text">Artist</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Cliënt</p>
                  <p class="bar-text">Personal Private collections</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Tools</p>
                  <a class="bar-text">Ink, Paper, Axidraw</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 01 / MINI TITLE - Process ?   -->
      <div class="mini-title-container bg-white">
        <div class="mini-title-box pt-md">
          <p class="mini-title-label txt-gr-60">Handmade series</p>
        </div>
      </div>

      <!-- Work Title Block - 80X60 -->
      <section class="copy-block bg-white pb-md">
        <h4 class="copy-block-text txt-ss-h4 txt-nt-100">Collider 80x60</h4>
        <p class="copy-block-text txt-ss-sub2 txt-gr-50 mt-xs">2018</p>
        <p class="copy-block-text txt-ss-body1 txt-nt-100 mt-sm">This set was made between 2021 and 2022. Each drawing
          is done freehanded in ink, 32x24cm on 220g Ca' Grain paper.</p>
      </section>

      <div class="container-fluid py-xl bg-white">
        <div class="grid-images-wrapper" ref="imageWrapper">
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_large_1.jpg" alt="Collider 60 by 80 - P1">
          </div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_large_2.jpg" alt="Collider 60 by 80 - P2">
          </div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_large_3.jpg" alt="Collider 60 by 80 - P3">
          </div>
          <div class="grid-box sm"><div class="box-spacer"></div>
          </div>
        </div>
        <div class="scroll-buttons mt-sm">
          <button class="scroll-button prev" @click="scrollPrev">
            <img class="scroll-arrow" src="/assets/arrow-right-link.png" alt="arrow">
          </button>
          <button class="scroll-button next" @click="scrollNext">
            <img class="scroll-arrow" src="/assets/arrow-right-link.png" alt="arrow">
          </button>
        </div>
      </div>


      <!-- Work Title Block - 80X60 -->
      <section class="copy-block bg-white pb-md">
        <h4 class="copy-block-text-half txt-ss-h6 txt-nt-100">These drawings are quite large, I spent around 6 weeks of
          hand drawing on each sheet.</h4>
        <p class="copy-block-text txt-ss-body1 txt-nt-100 mt-sm">I try to apply a systemic approach to each drawing, as
          I'm searching for patterns or images. Each work has been executed in ink. Some were executed by hand, others
          digitally, combining Adobe Illustrator and Inkscape with my Axidraw plotter.</p>
      </section>


      <!-- FULL IMAGE -- FULL SCREEN WIDTH -->
      <div class="container-fluid mt-md">
        <picture>
          <source media="(max-width: 450px)" srcset="/assets/images/projects/collider/collider-banner-1-mobile.png" />
          <img class="img-fluid project-heading-img mid" src="/assets/images/projects/collider/collider-banner-1-lg.png"
            alt="An image of the made icon graphic language">
        </picture>
      </div>


      <!-- Info Block - HOLY COW'S SKETCHES -->
      <section class="copy-block bg-nt-100">
        <div class="images-wrapper no-stack">
          <p class="txt-ss-body2 txt-gr-30">This series started in 2022, I got an Axidraw SE drawing machine. I digitized some of my work with Adobe Illustrator and Inkscape. I was aiming for a more economical approach to drawing, opposed to manual labour. This resulted in using robotics as a new creative tool.</p>
          <p class="txt-ss-body2 txt-gr-30">This series started in 2022, I saved some cash and bought an Axidraw SE drawing machine. I digitized some of my work with Adobe Illustrator and Inkscape. I was aiming for a more economical approach to drawing, opposed to manual labour. This resulted in using robotics as a new creative tool.</p>
        </div>
        <h4 class="copy-block-text-half txt-ss-h5 txt-nt-10">
          The Axidraw robot is a wonderful tool. I learned that getting it up and running is its own craft.</h4>
      </section>
      <!-- CAROUSEL SLIDER 2 - AXIDRAW PLOTS  -->
      <div class="container-fluid pb-xl bg-nt-100 pt-md">
        <div class="grid-images-wrapper" ref="imageWrapper2">
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_plotted1@0.5x.jpg" alt="Collider Plotted - P1"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_plotted2@0.5x.jpg" alt="Collider Plotted - P2"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_plotted3@0.5x.jpg" alt="Collider Plotted - P3"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_plotted4@0.5x.jpg" alt="Collider Plotted - P4"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_plotted5@0.5x.jpg" alt="Collider Plotted - P5"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_plotted6@0.5x.jpg" alt="Collider Plotted - P6"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_plotted7@0.5x.jpg" alt="Collider Plotted - P7"></div>

        </div>
        <div class="scroll-buttons mt-sm">
          <button class="scroll-button prev" @click="scrollPrevAlt">
            <img class="scroll-arrow" src="/assets/arrow-right-link.png" alt="arrow">
          </button>
          <button class="scroll-button next" @click="scrollNextAlt">
            <img class="scroll-arrow" src="/assets/arrow-right-link.png" alt="arrow">
          </button>
        </div>
      </div>


      <!-- Info Block - WEBSITE -->
      <section class="quote-block bg-white mt-md">
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
            <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
            <a href="https://auro-future.com/" target="_blank" class="link-text">{{ buttonWebsiteText }}</a>
          </button>
        </div>
      </div>

      <div class="container-fluid mockup-center bg-nt-10 mt-md">
        <img class="mockup-image" src="/assets/images/projects/auro/auro-mockup-mobile-1.png" alt="arrow">
        <img class="mockup-image" src="/assets/images/projects/auro/auro-mockup-mobile-1.png" alt="arrow">
        <img class="mockup-image" src="/assets/images/projects/auro/auro-mockup-mobile-1.png" alt="arrow">
      </div>

      <!-- NEXT PROJECT BAR -->
      <div class="next-project-bar mt-lg">
        <router-link to="/lines" class="next-project-link">
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


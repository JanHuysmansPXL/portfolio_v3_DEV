<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";
import HolyCowBrandSlides from "@/components/HolyCowBrandSlides.vue";

export default {
  data() {
    return {
      buttonWebsiteText: 'Auro Website',
    };
  },
  components: {
    FooterComponent,
    MarqueeBar,
    HolyCowBrandSlides,
  },
  methods: {
    scrollPrev() {
            this.$refs.imageWrapper.scrollBy({ left: -316, behavior: 'smooth' });
            },
            scrollNext() {
            this.$refs.imageWrapper.scrollBy({ left: 316, behavior: 'smooth' });
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
          <source media="(max-width: 768px)" srcset="/assets/images/projects/holycow/holycow-cover-mobile.png" />
          <img class="img-fluid project-heading-img" src="/assets/images/projects/holycow/holycow-cover-1.png"
            alt="An image of the made icon graphic language">
        </picture>
      </div>


      <!-- TITLE BLOCK  -  1. WORDMARK -->
      <section id="AuroHead" class="project-title-block bg-nt-10">
        <h2 class="project-title-block-title">Holy Cow!</h2>
        <!-- INFO SECTION -->
        <div class="project-info-block mt-md">
          <div class="about-block">
            <p class="about-text txt-ss-sub2 txt-gr-50">About</p>
          </div>
          <div class="intro-block">
            <h6 class="intro-title txt-ss-h6">Building a kick-ass burger brand with a conscience.</h6>
            <p class="intro-subtitle txt-ss-body1 txt-pp-80">Lorem ipsum dolor sit amet consectetur. At posuere aliquet
              sit sagittis ornare id cras magna. Pellentesque tincidunt enim aliquam elit .Lorem ipsum dolor sit amet
              consectetur.</p>
          </div>
          <div class="details-block">
            <h5 class="details-title txt-ss-sub2">BRANDING / SOCIAL MARKETING</h5>
            <div class="details-wrap">
              <div class="detail-bar">
                <div class="text-wrap">
                  <p class="bar-text">Year</p>
                  <p class="bar-text">2023</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Role</p>
                  <p class="bar-text">Digital Designer</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Cliënt</p>
                  <p class="bar-text">PXL*</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Tools</p>
                  <a class="bar-text">Adobe Photoshop, Illustrator, XD</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <!-- 01 / POSTS  -->
      <div class="mini-title-container bg-white">
        <div class="mini-title-box pt-md">
          <p class="mini-title-label txt-nt-100">What’s the brand about?</p>
        </div>
      </div>

      <!-- Info Block - HOLY COW'S MISSION -->
      <section class="copy-block bg-white">
        <h4 class="copy-block-text txt-ss-h5 txt-nt-100">
          Holy Cow's mission is to create a world where people can enjoy a healthy and guilt-free meal. We want to be
          the most ecological fastfood-chain in the industry by spearheading innovation.
        </h4>
        <div class="images-wrapper">
          <img src="/assets/images/projects/holycow/holycow_branding/brand_benchmark1.jpg" alt="Onyx Sketch 1"
            class="half-image">
          <img src="/assets/images/projects/holycow/holycow_branding/brand_benchmark2.jpg" alt="Onyx Sketch 2"
            class="half-image">
        </div>
        <h4 class="copy-block-text txt-ss-h5 txt-nt-100">
          To achieve this we go full circle. We make use of the latest trends and innovations, like Clean-meat,
          farm-to-table and online services like TooGoodToGo. </h4>
        <h4 class="copy-block-text txt-ss-h5 txt-nt-100 mt-sm">
          We focus on what matters, by insuring the best quality at the lowest possible impact for our beloved planet.
        </h4>
      </section>


      <!-- Info Block - HOLY COW'S SKETCHES -->
      <section class="copy-block bg-nt-100 pb-lg mt-lg">
        <div class="images-wrapper no-stack">
          <img src="/assets/images/projects/holycow/holycow_interface/ui_schets_2.png" alt="Onyx Sketch 1"
            class="half-image">
          <img src="/assets/images/projects/holycow/holycow_interface/ui_schets_3.png" alt="Onyx Sketch 2"
            class="half-image">
        </div>
        <h4 class="copy-block-text-half txt-ss-h5 txt-nt-10">
          “I love sketching interfaces. — Nearly as much as I love a Holy Cow burger.”</h4>
      </section>

      <!-- Info Block - HOLY COW'S MISSION -->
      <section class="copy-block bg-white mt-lg">
        <h4 class="copy-block-text txt-ss-h5 txt-nt-100">
          How 'bout the cow?
        </h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm mb-md">
          I prototyped an app for Holy Cow, and made a brand bible. A collection of guidelines for the brand. Checkit below.
        </p>
      </section>

      <HolyCowBrandSlides />

      <!-- MOCKUPS - HOLY COW INTERFACE TRIPLE -->
      <div class="container-fluid mockup-triple bg-white mt-sm">
        <div class="textbox">
          <h4 class="copy-block-text-half txt-ss-h5 txt-nt-100 mb-sm">Get flowing.</h4>
          <p class="txt-ss-body2 txt-nt-60">I designed a large part of the Holy Cow-interface. Our goal was to create an app where people could easily order and pick-up our delicious burgers. Designing the Holy-Cow interface was a smash. We tried to uphold an idea of zesty freshness, while trying to communicate our love for our planet, and it’s 4-bellied beings.</p>
        </div>
        <div class="image-wrapper">
          <img class="image" src="/assets/images/projects/holycow/holycow_interface/holycow_mockup_app4.png" alt="HolyCow Interface Detail Image - Shop">
          <img class="image" src="/assets/images/projects/holycow/holycow_interface/holycow_mockup_app2.png" alt="HolyCow Interface Detail Image - Checkout">
          <img class="image" src="/assets/images/projects/holycow/holycow_interface/holycow_mockup_app3.png" alt="HolyCow Interface Detail Image - Confirmed">
        </div>
      </div>



      <!-- NEXT PROJECT BAR -->
      <div class="next-project-bar mt-md">
        <router-link to="/transit" class="next-project-link">
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


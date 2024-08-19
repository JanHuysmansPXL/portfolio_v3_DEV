<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";
import transitVideoImport from '/assets/images/projects/tinyhouse/TinyHouse - Instagram Posts/TinyHouse---Instagram-Story-1080x1920-n2.gif';
import TinyHouseBrandSlides from '@/components/TinyHouseBrandSlides.vue';


export default {
  data() {
    return {
      transitVideo: transitVideoImport,
      buttonWebsiteText: 'Auro Website',
    };
  },
  components: {
    FooterComponent,
    MarqueeBar,
    TinyHouseBrandSlides,
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

      <!-- FULL IMAGE  -->
      <div class="container-fluid">
        <img class="img-fluid project-heading-img" src="/assets/images/projects/tinyhouse/tinyhouse-cover-1.png"
          alt="An image of the made icon graphic language">
      </div>

      <!-- TITLE BLOCK  -  1. WORDMARK -->
      <section class="project-title-block bg-nt-10">
        <h2 class="project-title-block-title">Tiny House</h2>
        <!-- INFO SECTION -->
        <div class="project-info-block mt-md">
          <div class="about-block">
            <p class="about-text txt-ss-sub2 txt-gr-50">About</p>
          </div>
          <div class="intro-block">
            <h6 class="intro-title txt-ss-h6">Inspiring people to live smaller trough joyful branding.</h6>
            <p class="intro-subtitle txt-ss-body1 txt-nt-60">TinyHouse is an ecological brand that brings affordable and
              durable tiny houses to the masses. For this project I made the logo and brand guide, online banners and
              Instagram content.</p>
          </div>
          <div class="details-block">
            <h5 class="details-title txt-ss-sub2">Branding / SOCIAL MARKETING</h5>
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
      <div class="mini-title-container bg-nt-10">
        <div class="mini-title-box pt-md">
          <p class="mini-title-label txt-gr-50">Mission</p>
        </div>
      </div>

      <!-- Info Block - Socials -->
      <section class="copy-block bg-nt-10">
        <h4 class="copy-block-text-half txt-ss-h4 txt-nt-100">
          Living smaller and greener.
        </h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">TinyHouse is about inspiring people to live
          smaller and greener. For this brand I wanted a fresh and youthful image. I developed the logo, brand guide and
          social content for the brand.</p>
      </section>

      <!-- CAROUSEL SLIDER FOR INSTA SLIDES GRID  -->

      <div class="container-fluid py-xl bg-nt-10">
        <div class="grid-images-wrapper" ref="imageWrapper">
          <div class="grid-box"><img class="grid-image post"
              src="/assets/images/projects/tinyhouse/TinyHouse - Instagram Posts/TinyHouse---Instagram-PostsPOST-1.png"
              alt=""></div>
          <div class="grid-box"><img class="grid-image post"
              src="/assets/images/projects/tinyhouse/TinyHouse - Instagram Posts/TinyHouse---Instagram-PostsPOST-2.png"
              alt=""></div>
          <div class="grid-box"><img class="grid-image post"
              src="/assets/images/projects/tinyhouse/TinyHouse - Instagram Posts/TinyHouse---Instagram-PostsPOST-3.png"
              alt=""></div>
          <div class="grid-box"><img class="grid-image post"
              src="/assets/images/projects/tinyhouse/TinyHouse - Instagram Posts/TinyHouse---Instagram-PostsPOST-4.png"
              alt=""></div>
          <div class="grid-box"><img class="grid-image post"
              src="/assets/images/projects/tinyhouse/TinyHouse - Instagram Posts/TinyHouse---Instagram-PostsPOST-5.png"
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

      <!-- FULL VIDEO  
      <div class="container-fluid bg-nt-100">
            <video class="vid-pagewidth padded" autoplay loop>
              <source :src="vidOne" type="video/mp4"> Your browser does not support the video tag.
            </video>
      </div>  -->

      <!-- Heading Block - II -->
      <section class="quote-block bg-white py-lg">
        <h4 class="quote-block-text-half txt-ss-h4 txt-nt-100">
          A few Insta posts and Google banners. I wrote the copy in Dutch and went for a simple and to-the-point design.</h4>
        <p class="quote-block-text-half txt-ss-body1 txt-pp-80 mt-sm">Figma ipsum component variant main layer. Layer
          stroke prototype comment share invite strikethrough. Figma fill opacity plugin vector fill. Link image inspect
          share draft group.</p>
      </section>

      <div class="container-fluid mockup-triple bg-white">
        <div class="textbox">
          <h4 class="copy-block-text-half txt-ss-h5 txt-nt-100 mb-sm">Photoshop keyframes.</h4>
          <p class="txt-ss-body2 txt-nt-60">These reel animations were done in Adobe Photoshop. I used the timeline and keyframes to animate these posts. Usually I would use After Effects for more precise easing and timing, but for this project I had to leverage other tools.</p>
        </div>
        <div class="image-wrapper">
          <img class="image" src="/assets/images/projects/tinyhouse/TinyHouse - Instagram Posts/TinyHouse---Instagram-Story-1080x1920-n1_EarthDay.gif" alt="arrow">
          <img class="image" src="/assets/images/projects/tinyhouse/TinyHouse - Instagram Posts/TinyHouse---Instagram-Story-1080x1920-n2.gif" alt="arrow">
          <img class="image" src="/assets/images/projects/tinyhouse/TinyHouse - Instagram Posts/TinyHouse---Instagram-Story-1080x1920-n3.gif" alt="arrow">
        </div>
      </div>

      <!-- FULL IMAGE -- FULL SCREEN WIDTH -->
      <div class="container-fluid">
        <img class="img-fluid project-heading-img auto"
          src="/assets/images/projects/tinyhouse/Tinyhouse - Mockups/Small Cargo Truck Mockup.jpg"
          alt="An image of the made icon graphic language">
      </div>

      <!-- Heading Block - II -->
      <section class="quote-block bg-white py-lg">
        <h4 class="quote-block-text-half txt-ss-h4 txt-nt-100">
          Tiny House has a dedicated brandguide where the identity of the brand is elaborated. </h4>
        <p class="quote-block-text-half txt-ss-body1 txt-nt-60 mt-sm">Have a look at some exerpts from the finished brand guide here.</p>
      </section>

      <!-- BRAND SLIDES-->

      <TinyHouseBrandSlides/>

      <!-- FULL IMAGE -- FULL SCREEN WIDTH -->
      <div class="container-fluid mt-lg">
        <img class="img-fluid project-heading-img auto"
          src="/assets/images/projects/tinyhouse/tinyhouse-mockup-banner.png" alt="An image of some tinyhouse mockups">
      </div>
      <!-- QUOTE BLOCK "" -->
      <section class="container-fluid bg-nt-10">
        <div class="quote-block-wrapper">
          <h6 class="txt-ss-h5 txt-gr-80">“I got a free student upgrade after I needed over 500 elements to place on my
            boards. — Thank you, Whimsical.”</h6>
        </div>
      </section>

      <!-- NEXT PROJECT BAR -->
      <div class="next-project-bar mt-lg">
        <router-link to="/holycow" class="next-project-link">
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


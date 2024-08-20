<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";
import kronolithVideoImport from '/assets/images/projects/kronolith/kronolith-mockup-video.mp4';


export default {
  data() {
    return {
      buttonWebsiteText: 'Auro Website',
      vidKrono: kronolithVideoImport,
    };
  },
  components: {
    FooterComponent,
    MarqueeBar,
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
        <img class="img-fluid project-heading-img" src="/assets/images/projects/kronolith/kronolith-cover-1.png"
          alt="An image of the made icon graphic language">
      </div>


      <!-- TITLE BLOCK  -  1. WORDMARK -->
      <section id="AuroHead" class="project-title-block bg-nt-10">
        <h2 class="project-title-block-title">Kronolith</h2>
        <!-- INFO SECTION -->
        <div class="project-info-block mt-md">
          <div class="about-block">
            <p class="about-text txt-ss-sub2 txt-gr-50">About</p>
          </div>
          <div class="intro-block">
            <h6 class="intro-title txt-ss-h6">The Kronolith is a wall mounted clock with a clickable and rotating outer
              rim.</h6>
            <p class="intro-subtitle txt-ss-body1 txt-nt-60">The clock is designed to have multiple states: always-on,
              active, as well as digital and analog display. It has personalisation options and a live circadian
              background.</p>
          </div>
          <div class="details-block">
            <h5 class="details-title txt-ss-sub2">Interface / Product Design / 3D Animation</h5>
            <div class="details-wrap">
              <div class="detail-bar">
                <div class="text-wrap">
                  <p class="bar-text">Year</p>
                  <p class="bar-text">2024</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Role</p>
                  <p class="bar-text">UI & Product Designer</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Cliënt</p>
                  <p class="bar-text">None</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Tools</p>
                  <a class="bar-text">Figma, Blender, Vizcom, Midjourney</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MINI TITLE  -->
      <div class="mini-title-container bg-nt-100">
        <div class="mini-title-box pt-md">
          <p class="mini-title-label txt-nt-10">Leveraging AI</p>
        </div>
      </div>

      <!-- Info Block - Socials -->
      <section class="copy-block bg-nt-100">
        <h4 class="copy-block-text-half txt-ss-h4 txt-nt-10 pe-sm">
          The first drafts of the Kronolith were made with Midjourney and drawn out and animated in Blender.
        </h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-10 mt-sm pe-sm">I designed the product to be wall-mounted.
          The controls are integrated in the rim which rotates 360 degrees. The knurled rim can be pushed, so the user
          confirm selections. The body design is optimized for grip and sturdyness.
        </p>
      </section>
      <div class="duo-block bg-nt-100 py-lg">
        <div class="half">
          <section class="copy-block no-padding">
            <h4 class="copy-block-text txt-ss-h5 txt-nt-10">
              The Always-On state reflects the minimalist take on the digital clock. When triggered, the clock becomes
              active.
            </h4>
            <p class="copy-block-text txt-ss-body1 txt-nt-10 mt-sm">This reflects how modern smart-watches work and has
              a positive impact on the product’s energy consumption.</p>
          </section>
        </div>
        <div class="half">
          <img class="img-pagewidth fillheight align-end" src="/assets/images/projects/kronolith/kronlith-mockup-1.png"
            alt="Kronolith detail image">
        </div>
      </div>

      <!-- FULL IMAGE -- FULL SCREEN WIDTH -->
      <div class="container-fluid">
        <img class="img-fluid project-heading-img auto"
          src="/assets/images/projects/kronolith/kronolith-overview-banner.png"
          alt="An image of the made icon graphic language">
      </div>

      <div class="container-fluid mockup-triple bg-white mt-sm">
        <div class="textbox">
          <h4 class="copy-block-text-half txt-ss-h5 txt-nt-100 mb-sm">Almost real.</h4>
          <p class="txt-ss-body2 txt-nt-60">A model was made in Blender to mockup the product in action.I made the actual product based on the prompt draft and animated the
            rotating button.</p>
          <p class="txt-ss-body2 txt-nt-60 mt-sm">These images display the process of designing the mockup. The display content was
            animated in Figma and embedded in Blender as a surface modifier. No After Effects.</p>
        </div>
        <div class="image-wrapper">
          <img class="image" src="/assets/images/projects/kronolith/kronolith-img-1.png" alt="Kronolith Detail image 1">
          <img class="image" src="/assets/images/projects/kronolith/kronolith-img-2.png" alt="Kronolith Detail image 2">
          <img class="image" src="/assets/images/projects/kronolith/kronolith-img-3.png" alt="Kronolith Detail image 3">
        </div>
      </div>

      <!-- QUOTE BLOCK "" -->
      <section class="container-fluid bg-nt-10">
        <div class="quote-block-wrapper">
          <h6 class="txt-ss-h5 txt-gr-80">“I animated the product in Blender to preview the actual controls of the
            clock.“</h6>
        </div>
      </section>

      <div class="container-fluid bg-white mt-sm">
        <div class="duo-block align-end">
          <video class="vid-pagewidth" autoplay loop playsinline muted>
            <source :src="vidKrono" type="video/mp4"> Your browser does not support the video tag.
          </video>
          <div class="text-block container-fluid">
          <p class="txt-ss-body2 txt-gr-50 caption-left">The alarm is set by rotating. This is immediatly reflected on the
            display. When the alarm is dialed the indicators appear accordingly. When set the user gets a feedback
            notification as well as a highlight on the display.</p>
          </div>
        </div>
      </div>


      <!-- FULL VIDEO  
      <div class="container-fluid bg-nt-100">
            <video class="vid-pagewidth padded" autoplay loop>
              <source :src="vidOne" type="video/mp4"> Your browser does not support the video tag.
            </video>
      </div>  -->

      <!-- NEXT PROJECT BAR -->
      <div class="next-project-bar mt-lg">
        <router-link to="/buildr" class="next-project-link">
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


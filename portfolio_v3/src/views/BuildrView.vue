<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";

export default {
  data() {
    return {
      buttonWebsiteText: 'Buildr Website',
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
        <img class="img-fluid project-heading-img" src="/assets/images/projects/buildr/buildr_mockupsgrid.png"
          alt="An image of the made icon graphic language">
      </div>


      <!-- TITLE BLOCK  -  1. WORDMARK -->
      <section id="AuroHead" class="project-title-block bg-nt-10">
        <h2 class="project-title-block-title">Buildr</h2>
        <!-- INFO SECTION -->
        <div class="project-info-block mt-md">
          <div class="about-block">
            <p class="about-text txt-ss-sub2 txt-gr-50">About</p>
          </div>
          <div class="intro-block">
            <h6 class="intro-title txt-ss-h6">Buildr is a digital solution to help construction workers match with their
              dream jobs.</h6>
            <p class="intro-subtitle txt-ss-body1 txt-nt-60">Buildr. is a (fictional) job-matching app for construction,
              metal and logistics. We did the branding, the interface for mobile and desktop, and developed the website
              for the product.</p>
          </div>
          <div class="details-block">
            <h5 class="details-title txt-ss-sub2">UI / UX / Webdevelopment</h5>
            <div class="details-wrap">
              <div class="detail-bar">
                <div class="text-wrap">
                  <p class="bar-text">Year</p>
                  <p class="bar-text">2023</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Role</p>
                  <p class="bar-text">Digital Designer, Developer</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Cliënt</p>
                  <p class="bar-text">PXL Digital*</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Tools</p>
                  <a class="bar-text">Adobe XD, HTML, CSS, JS</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Info Block - Buildr Brief + Mockup -->
      <section class="copy-block bg-white mt-md mb-md">
        <h5 class="copy-block-text-half txt-ss-h5 txt-nt-100">
          The brief: build a job-matching app and an accessible website for its users, develop the brand identity for
          the product and empower users to find work more easily.</h5>
      </section>

      <!-- MOCKUP CENTERED -->
      <div class="container-fluid mockup-center bg-white mt-md">
        <img class="mockup-image" src="/assets/images/projects/buildr/buildr_animated_mock_app3.gif" alt="arrow">
      </div>

      <!-- QUOTE BLOCK "" -->
      <section class="container-fluid bg-nt-10">
        <div class="quote-block-wrapper">
          <h6 class="txt-ss-h5 txt-gr-80">“Buildr started with a mission: To help people build their dreams.”</h6>
        </div>
      </section>

      <!-- FULL IMAGE  -->
      <div class="container-fluid">
        <img class="img-fluid project-heading-img" src="/assets/images/projects/buildr/buildr-banner-1.png"
          alt="An image of the made icon graphic language">
      </div>

      <!-- Info Block - Buildr Brief + Mockup -->

      <section class="copy-block bg-white mt-md mb-md">
        <h4 class="copy-block-text-half txt-ss-h5 txt-nt-100">
          For our audience, it was essential that our platform be accessible, easy-to-use, and down-to-earth. No frills.
        </h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-60 mt-sm">Buildr. is a (fictional) job-matching app for
          construction,
          metal and logistics. We did the branding, the interface for mobile and desktop, and developed the website
          for the product.</p>
      </section>

      <!-- FULL IMAGE PADDED  -->
      <div class="container-fluid bg-white">
        <img class="img-fluid img-pagewidth padded fillheight"
          src="/assets/images/projects/buildr/buildr_persona_jos.jpg">
        <img class="img-fluid img-pagewidth padded-side fillheight"
          src="/assets/images/projects/buildr/buildr_research1.png">
      </div>

      <!-- CAROUSEL SLIDER FOR INSTA SLIDES GRID  

      <div class="container-fluid py-xl bg-nt-100">
        <div class="grid-images-wrapper" ref="imageWrapper">
          <div class="grid-box"><img class="grid-image" src="/assets/images/projects/transit/transit_poster.jpg" alt=""></div>
          <div class="grid-box"><img class="grid-image" src="/assets/images/projects/transit/transit_sculpt1.jpg" alt=""></div>
          <div class="grid-box"><img class="grid-image" src="/assets/images/projects/transit/transit_sculpt2.jpg" alt="">
          </div>
          <div class="grid-box"><img class="grid-image" src="/assets/images/projects/transit/transit_sculpt3.jpg" alt=""></div>
          <div class="grid-box"><img class="grid-image" src="/assets/images/projects/transit/transit_sculpt4.jpg" alt=""></div>
          <div class="grid-box"><img class="grid-image" src="/assets/images/projects/transit/transit_render.jpg" alt="">
          </div>
        </div>
        <div class="scroll-buttons mt-sm">
          <button class="scroll-button prev" @click="scrollPrev">
            <img class="scroll-arrow" src="../assets/arrow-right-link.png" alt="arrow">
          </button>
          <button class="scroll-button next" @click="scrollNext">
            <img class="scroll-arrow" src="../assets/arrow-right-link.png" alt="arrow">
          </button>
        </div>
      </div>  -->

      <!-- FULL VIDEO  
      <div class="container-fluid bg-nt-100">
            <video class="vid-pagewidth padded" autoplay loop>
              <source :src="vidOne" type="video/mp4"> Your browser does not support the video tag.
            </video>
      </div>  -->

      <!-- TEXT BLOCK - DESIGNING THE APP -->
      <section class="copy-block bg-white py-md">
        <h4 class="copy-copy-text-half txt-ss-h4 txt-nt-100">
          Designing the app.
        </h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">While making the app we went through several stages. From sketches, information architecture and wireframes, to a visual design and prototype.</p>
      </section>

      <!-- ADD IMAGES HERE
       ***
       ***
       ***
      -->

      <!-- CTA BUTTONS -->
      <div class="cta-wrapper container-fluid">
        <div class="cta-buttonbar">
          <button class="cta-button">
            <img class="link-arrow" src="../assets/arrow-right-link.png" alt="arrow">
            <a href="https://auro-future.com/" target="_blank" class="link-text">{{ buttonWebsiteText }}</a>
          </button>
        </div>
      </div>

      <!-- MOCKUP CENTERED -->
      <div class="container-fluid mockup-center bg-nt-100 mt-md">
        <img class="mockup-image" src="/assets/images/projects/buildr/buildr_animated_mock_wire.gif" alt="arrow">
      </div>


      <!-- NEXT PROJECT BAR -->
      <div class="next-project-bar">
        <router-link to="/auro" class="next-project-link">
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


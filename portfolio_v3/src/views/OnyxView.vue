<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";


export default {
  data() {
    return {
      /*transitVideo: transitVideoImport,*/
      buttonWebsiteText: 'Download font OTF',
    };
  },
  components: {
    FooterComponent,
    MarqueeBar,
  },
  methods: {

  }
};
</script>

<template>
  <div id="pagewrapper">
    <main class="maintest">


      <!-- FULL IMAGE  -->
      <div class="container-fluid">
        <img class="img-fluid project-heading-img" src="/assets/images/projects/onyx/onyx-cover-1.png"
          alt="An image of the made icon graphic language">
      </div>


      <!-- TITLE BLOCK  -  1. WORDMARK -->
      <section id="AuroHead" class="project-title-block bg-nt-10">
        <h2 class="project-title-block-title">Onyx</h2>
        <!-- INFO SECTION -->
        <div class="project-info-block mt-md">
          <div class="about-block">
            <p class="about-text txt-ss-sub2 txt-gr-50">About</p>
          </div>
          <div class="intro-block">
            <h6 class="intro-title txt-ss-h6">A handmade font that rocks.</h6>
            <p class="intro-subtitle txt-ss-body1 txt-nt-60">Onyx is the first font I ever made. I crafted each letter
              as if it were a monolithic block. I made several sketches before developing the letters digitally with
              Adobe Illustrator and FontForge.</p>
          </div>
          <div class="details-block">
            <h5 class="details-title txt-ss-sub2">TYPOGRAPHY</h5>
            <div class="details-wrap">
              <div class="detail-bar">
                <div class="text-wrap">
                  <p class="bar-text">Year</p>
                  <p class="bar-text">2023</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Role</p>
                  <p class="bar-text">Designer</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Type</p>
                  <p class="bar-text">Display Font</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Tools</p>
                  <a class="bar-text">Adobe Illustrator, Fontforge</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- COPY BLOCK v1 -->
      <section class="copy-block bg-nt-100 py-md">
        <h4 class="copy-block-text-half txt-ss-h4 txt-nt-10">Onyx isn't meant to be slick.</h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-10 mt-sm">Getting the forms to be legible enough but still
          slightly wonky was a challenge, but I really loved to complete the puzzle.</p>
        <div class="images-wrapper mt-md">
          <img src="/assets/images/projects/onyx/onyx-sketch-1.png" alt="Onyx Sketch 1" class="half-image">
          <img src="/assets/images/projects/onyx/onyx-sketch-2.png" alt="Onyx Sketch 2" class="half-image">
        </div>
        <h4 class="copy-block-text-half txt-ss-h4 txt-nt-10 mt-md">The symbols are based on rough sketches. My aim was to
          go all solid.</h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-10 mt-sm">I experimented with angles and volumes in order see
          where it got me. Personally I much think faster while drawing. To a certain extent the marks appear a bit
          crafted.</p>
      </section>

      <!-- FULL IMAGE PADDED  -->
      <div class="container-fluid bg-white">
        <img class="img-fluid img-pagewidth padded fillheight"
          src="/assets/images/projects/onyx/onyx_p5.jpg">
      </div>

      <!-- FULL VIDEO  
      <div class="container-fluid bg-white">
        <video class="vid-pagewidth padded" autoplay loop>
          <source :src="vidOne" type="video/mp4"> Your browser does not support the video tag.
        </video>
      </div> -->

      <!-- Info Block - WEBSITE -->
      <section class="quote-block bg-white">
        <h4 class="quote-block-text-half txt-ss-h4 txt-nt-100">Solid.</h4>
        <p class="quote-block-text-half txt-ss-body1 txt-nt-100 mt-sm">An overview of the glyphs in the typeface. My
          goal was to have solid glyphs only. The biggest challenge was differentiating between certain marks, like the
          letters O and D or the letter S and the number 5.</p>
      </section>





      <!-- CTA BUTTON -->
      <div class="cta-wrapper container-fluid">
        <div class="cta-buttonbar">
          <button class="cta-button">
            <img class="link-arrow" src="../assets/arrow-right-link.png" alt="arrow">
            <a href="/assets/images/projects/onyx/Onyx.ttf" target="_blank" type="download" class="link-text">{{ buttonWebsiteText }}</a>
          </button>
        </div>
      </div>


      <!-- METRICS Tabs-->
      <section id="metrics" class="metrics-box container-fluid bg-nt-100">
        <div class="metric-column">
          <p class="metric-label txt-ss-sub2 txt-nt-10">Characters</p>
          <h1 class="metric-number txt-ss-h2 txt-nt-10">40+</h1>
          <p class="metric-text txt-gr-50">The typeface contains a full set of capitals and some of the most used glyphs.</p>
        </div>
        <div class="metric-column">
          <p class="metric-label txt-ss-sub2 txt-nt-10">Symbols</p>
          <h1 class="metric-number txt-ss-h2 txt-nt-10">9</h1>
          <p class="metric-text txt-gr-50">I took part in a few group exhibitions. In some I took part as a co-curator or
            organiser.</p>
        </div>
        <div class="metric-column">
          <p class="metric-label txt-ss-sub2 txt-nt-10">Weights</p>
          <h1 class="metric-number txt-ss-h2 txt-nt-10">1</h1>
          <p class="metric-text txt-gr-50">Only black.</p>
        </div>
      </section>


      <!-- QUOTE BLOCK "" -->
      <section class="container-fluid bg-nt-10">
        <div class="quote-block-wrapper">
          <h6 class="txt-ss-h5 txt-gr-80">“You can have Onyx in all weights, as long as it’s black.“</h6>
        </div>
      </section>

      <!-- NEXT PROJECT BAR -->
      <div class="next-project-bar">
        <router-link to="/collider" class="next-project-link">
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


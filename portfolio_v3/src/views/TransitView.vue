<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";
import transitVideoImport from '/assets/images/projects/transit/transit_video.mp4';


export default {
  data() {
    return {
      transitVideo: transitVideoImport,
      vidOne: transitVideoImport,
      buttonWebsiteText: 'Transit Website',
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
  }
};
</script>

<template>
  <div id="pagewrapper">
    <main class="maintest">


      <!-- FULL IMAGE  -->
      <div class="container-fluid">
        <div class="container-fluid bg-white">
        <video class=" project-heading-vid vid-pagewidth" autoplay loop playsinline muted>
          <source :src="transitVideo" type="video/mp4"> Your browser does not support the video tag.
        </video>
      </div>
    </div>
       

      <!-- TITLE BLOCK  -  1. WORDMARK -->
      <section id="AuroHead" class="project-title-block bg-nt-10">
        <h2 class="project-title-block-title">Transit</h2>
        <!-- INFO SECTION -->
        <div class="project-info-block mt-md">
          <div class="about-block">
            <p class="about-text txt-ss-sub2 txt-gr-50">About</p>
          </div>
          <div class="intro-block">
            <h6 class="intro-title txt-ss-h6">I designed 5 sculptures for Transit, a techno/house-event with headliners like Mall Grab.</h6>
            <p class="intro-subtitle txt-ss-body1 txt-pp-80">Lorem ipsum dolor sit amet consectetur. At posuere aliquet sit
              sagittis ornare id cras magna. Pellentesque tincidunt enim aliquam elit .Lorem ipsum dolor sit amet
              consectetur.</p>
          </div>
          <div class="details-block">
            <h5 class="details-title txt-ss-sub2">ART / SCULPTURE / 3D</h5>
            <div class="details-wrap">
              <div class="detail-bar">
                <div class="text-wrap">
                  <p class="bar-text">Year</p>
                  <p class="bar-text">2020</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Role</p>
                  <p class="bar-text">Artist / Industrial Designer</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Cliënt</p>
                  <p class="bar-text">Transit / Ampere / Chaos</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Tools</p>
                  <a class="bar-text">Rhino, Cinema 4D, Cardboard</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TRANSIT COPY - INTRO TEXT -->
      <section class="copy-block bg-white mt-md">
        <h4 class="copy-block-text-half txt-ss-h4 txt-nt-100">
          In 2018 I designed five sculptures for Transit, a techno/house-event with headliners like Mall Grab.
        </h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">The idea behind the Auro was to create a
          collection of high-tech wearables to complement contemporary lifestyles.</p>
      </section>

      <!-- CAROUSEL SLIDER FOR TRANSIT IMAGES  -->
      <div class="container-fluid py-lg bg-white">
        <div class="grid-images-wrapper" ref="imageWrapper">
          <div class="grid-box"><img class="grid-image tall" src="/assets/images/projects/transit/transit_poster.jpg" alt=""></div>
          <div class="grid-box"><img class="grid-image tall" src="/assets/images/projects/transit/transit_sculpt1.jpg" alt=""></div>
          <div class="grid-box"><img class="grid-image tall" src="/assets/images/projects/transit/transit_sculpt2.jpg" alt="">
          </div>
          <div class="grid-box"><img class="grid-image tall" src="/assets/images/projects/transit/transit_sculpt3.jpg" alt=""></div>
          <div class="grid-box"><img class="grid-image tall" src="/assets/images/projects/transit/transit_sculpt4.jpg" alt=""></div>
          <div class="grid-box"><img class="grid-image tall" src="/assets/images/projects/transit/transit_render.jpg" alt="">
          </div>
        </div>
        <div class="grid-subtext">
          <p class="txt-ss-body2 bold txt-gr-50">Sculptures. (Scroll to view more)</p>
          <p class="txt-ss-body2 txt-gr-50">A few images of the event, the poster, and a 3D-render of one of the sculptures.</p>
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

      <!-- FULL VIDEO  
      <div class="container-fluid bg-nt-100">
            <video class="vid-pagewidth padded" autoplay loop>
              <source :src="vidOne" type="video/mp4"> Your browser does not support the video tag.
            </video>
      </div>  -->

      <!-- Heading Block - II -->
      <section class="copy-block bg-white">
        <h4 class="copy-block-text txt-ss-h4 txt-nt-100">
          The forms were designed in Cinema 4D, and edited in Rhino to a waffle-grid structure. 
        </h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">The cardboard cut-outs measure about 2.4 meters and were made by a specialised firm in the Netherlands.</p>
      </section>
      <!-- CTA BUTTONS -->
      <div class="cta-wrapper container-fluid">
        <div class="cta-buttonbar">
          <button class="cta-button">
            <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
            <a href="https://transit-festival.com/" target="_blank" class="link-text">{{ buttonWebsiteText }}</a>
          </button>
        </div>
      </div>

      <!-- FULL IMAGE -- FULL SCREEN WIDTH -->
      <div class="container-fluid mt-md">
        <img class="img-fluid project-heading-img mid" src="/assets/images/projects/transit/transit-context-1.png"
          alt="An image of the made icon graphic language">
      </div>

      <!-- FULL VIDEO 
      <div class="container-fluid bg-white">
        <video class="vid-pagewidth padded" autoplay loop>
          <source :src="vidOne" type="video/mp4"> Your browser does not support the video tag.
        </video>
      </div> -->

    <!-- QUOTE BLOCK "" -->
    <section class="container-fluid bg-nt-10">
        <div class="quote-block-wrapper">
          <h6 class="txt-ss-h5 txt-gr-80">"What started as a small project among friends turned out to become a big-time festival.”</h6>
        </div>
      </section>

      <!-- NEXT PROJECT BAR -->
      <div class="next-project-bar">
        <router-link to="/onyx" class="next-project-link">
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


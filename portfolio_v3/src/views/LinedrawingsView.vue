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
    scrollPrevA3() {
      this.$refs.imageWrapperA3.scrollBy({ left: -376, behavior: 'smooth' });
    },

    scrollNextA3() {
      this.$refs.imageWrapperA3.scrollBy({ left: 376, behavior: 'smooth' });
    },
    scrollPrevDig() {
      this.$refs.imageWrapperDigital.scrollBy({ left: -376, behavior: 'smooth' });
    },

    scrollNextDig() {
      this.$refs.imageWrapperDigital.scrollBy({ left: 376, behavior: 'smooth' });
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
          <source media="(max-width: 768px)" srcset="/assets/images/projects/line_drawings/linedrawings-cover-mobile.png" />
          <img class="img-fluid project-heading-img mid" src="/assets/images/projects/line_drawings/linedrawings-cover-1.png"
            alt="An image of the made icon graphic language">
        </picture>
      </div>
       

      <!-- *** TITLE BLOCK  -  LINE DRAWINGS ***  -->
      <section class="project-title-block bg-nt-10">
        <h2 class="project-title-block-title">Line Drawings</h2>
        <!-- *** INFO SECTION *** -->
        <div class="project-info-block mt-md">
          <div class="about-block">
            <p class="about-text txt-ss-sub2 txt-gr-50">About</p>
          </div>
          <div class="intro-block">
            <h6 class="intro-title txt-ss-h6">A collection of handmade ballpoint drawings and colour studies.</h6>
            <p class="intro-subtitle txt-ss-body1 txt-nt-60">The Line Drawings are a series of drawings made by a strict methodology. Each piece is built up out of hundreds of parallel lines. Trough these works colors and figuration are being examined.</p>
          </div>
          <div class="details-block">
            <h5 class="details-title txt-ss-sub2">Art / Drawing</h5>
            <div class="details-wrap">
              <div class="detail-bar">
                <div class="text-wrap">
                  <p class="bar-text">Year</p>
                  <p class="bar-text">2018-2023</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Role</p>
                  <p class="bar-text">Artist</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Cliënt</p>
                  <p class="bar-text">None</p>
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

      <!-- *** 01 / MINI TITLE - COLOR STUDIES *** -->
      <div class="mini-title-container bg-white">
        <div class="mini-title-box pt-md">
          <p class="mini-title-label txt-gr-50">Color studies.</p>
        </div>
      </div>


      <!-- *** Work Title Block - 80X60 *** -->
      <section class="copy-block bg-white">
        <h4 class="copy-block-text txt-ss-h4 txt-nt-100">Limited Colours</h4>
        <p class="copy-block-text txt-ss-sub2 txt-gr-50 mt-xs">2018</p>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">A set of 8 drawings made in Bic on A4 paper. Experiment with the 8 colors from the limited-edition colors of the brand.</p>
      </section>

      <div class="container-fluid py-md bg-white">
        <div class="grid-images-wrapper" ref="imageWrapper">
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_limited1.jpg"
              alt="Line Drawings - Limited Series - Part 1 of 8">
          </div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_limited2.jpg"
              alt="Line Drawings - Limited Series - Part 2 of 8">
          </div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_limited3.jpg"
              alt="Line Drawings - Limited Series - Part 3 of 8">
          </div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_limited4.jpg"
              alt="Line Drawings - Limited Series - Part 4 of 8">
          </div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_limited5.jpg"
              alt="Line Drawings - Limited Series - Part 5 of 8">
          </div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_limited6.jpg"
              alt="Line Drawings - Limited Series - Part 6 of 8">
          </div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_limited7.jpg"
              alt="Line Drawings - Limited Series - Part 7 of 8">
          </div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_limited8.jpg"
              alt="Line Drawings - Limited Series - Part 8 of 8">
          </div>
          <div class="grid-box sm">
            <div class="box-spacer"></div>
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

      <!-- *** Work Title Block - 80X60 *** -->
      <section class="copy-block bg-white pb-md">
        <h4 class="copy-block-text-half txt-ss-h6 txt-nt-100">Each drawing contains the same 8 colors. Variation is generated by alternating a single color in a rythmical blend.</h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">One visual result of my process are the ‘trails’ that become apparant due to the line-scanning drawing process.</p>
      </section>

          <!-- *** Work Title Block - FOUR SEASONS *** -->
          <section class="copy-block bg-white pt-lg">
        <h4 class="copy-block-text txt-ss-h4 txt-nt-100">Four Seasons</h4>
        <p class="copy-block-text txt-ss-sub2 txt-gr-50 mt-xs">After Jakob Smits | 2016-2017</p>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">Interpretation after the work of the Flemish painter/draftsman Jakob Smits. Depiction of the four seasons in a dedicated Bic-color. Technique-study for line-drawings with figuration.</p>
      </section>
      <!-- *** CAROUSEL SLIDER 3 - A3 DRAWINGS ***  -->
      <div class="container-fluid pb-md bg-white pt-md">
        <div class="grid-images-wrapper" ref="imageWrapperDigital">
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_herfst.jpg" alt="Line Drawings -  The Four Seasons, Autumn"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_lente.jpg" alt="Line Drawings -  The Four Seasons, Spring"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_zomer.jpg" alt="Line Drawings -  The Four Seasons, Summer"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_winter.jpg" alt="Line Drawings -  The Four Seasons, Winter"></div>
        </div>
        <div class="scroll-buttons mt-sm">
          <button class="scroll-button prev" @click="scrollPrevDig">
            <img class="scroll-arrow" src="/assets/arrow-right-link.png" alt="arrow">
          </button>
          <button class="scroll-button next" @click="scrollNextDig">
            <img class="scroll-arrow" src="/assets/arrow-right-link.png" alt="arrow">
          </button>
        </div>
      </div>

      <!-- *** Work Title Block - 80X60 *** -->
      <section class="copy-block bg-white pb-md">
        <h4 class="copy-block-text-half txt-ss-h6 txt-nt-100">Each color is symbolically re-used according to Jakob Smits’ original work. All four works are part of a private collection.</h4>
      </section>

          <!-- *** FULL IMAGE -- FULL SCREEN WIDTH *** -->
      <div class="container-fluid py-lg">
        <picture>
          <source media="(max-width: 450px)" srcset="/assets/images/projects/line_drawings/line_coverimg.jpg" />
          <img class="img-fluid project-heading-img mid" src="/assets/images/projects/line_drawings/line_coverimg.jpg"
            alt="An image of the made icon graphic language">
        </picture>
        <div class="copy-block">
        <p class="copy-block-text-half txt-width-65ch txt-ss-body2 txt-gr-50 mt-sm">I try to apply a systemic approach to each
          drawing, as I'm searching for patterns or images. Each work has been executed in ink. Some were executed by hand, others
          digitally, combining Adobe Illustrator and Inkscape with my Axidraw plotter.</p>
        </div>
      </div>
      

      <!-- *** COPY BLOCK - DOUBLE TEXT ON AXIDRAW *** -->
      <section class="copy-block bg-nt-100">
        <!-- *** Work Title Block - COLLIDER PRINTS *** -->
        <h4 class="copy-block-text txt-ss-h4 txt-nt-10 pt-md">Autumn / Untitled</h4>
        <p class="copy-block-text txt-ss-sub2 txt-gr-50 mt-xs">2018</p>
      </section>
      <!-- CAROUSEL SLIDER 2 - AXIDRAW PLOTS  -->
      <div class="container-fluid bg-nt-100 py-md">
        <div class="grid-images-wrapper" ref="imageWrapper2">
          <div class="grid-box sm">
            <img class="grid-image"src="/assets/images/projects/line_drawings/line_herfst_kleur.jpg" alt="Autumn - Colour Study - P1">
          </div>
            <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_grey110.jpg" alt="Untitled - Colour Study - P1"></div>
          </div>
        <div class="scroll-buttons mt-sm">
          <button class="scroll-button prev" @click="scrollPrevAlt">
            <img class="scroll-arrow" src="/assets/arrow-right-link.png" alt="arrow">
          </button>
          <button class="scroll-button next" @click="scrollNextAlt">
            <img class="scroll-arrow" src="/assets/arrow-right-link.png" alt="arrow">
          </button>
        </div>
        <section class="copy-block bg-nt-100">
        <div class="images-wrapper no-stack py-sm">
          <p class="copy-block-text-half txt-ss-body2 txt-gr-30">This series started in 2022, I got an Axidraw SE
            drawing machine. I digitized some of my work with Adobe Illustrator and Inkscape. I was aiming for a more
            economical approach to drawing, opposed to manual labour. This resulted in using robotics as a new creative
            tool.</p>
          <p class="copy-block-text-half txt-ss-body2 txt-gr-30">This series started in 2022, I saved some cash and
            bought an Axidraw SE drawing machine. I digitized some of my work with Adobe Illustrator and Inkscape. I was
            aiming for a more economical approach to drawing, opposed to manual labour. This resulted in using robotics
            as a new creative tool.</p>
        </div>
      </section>
      </div>

      <!-- *** QUOTE BLOCK *** -->
      <section class="container-fluid bg-nt-10">
        <div class="quote-block-wrapper">
          <h6 class="txt-ss-h5 txt-pp-80">“Lorem quote lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, voluptates..”</h6>
        </div>
      </section>

      <!-- *** Work Title Block - 80X60 *** -->
      <section class="copy-block bg-nt-100 pt-lg">
        <h4 class="copy-block-text txt-ss-h4 txt-nt-10 mt-sm">Doll</h4>
        <p class="copy-block-text txt-ss-sub2 txt-gr-30 mt-xs">2019</p>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-10 mt-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt consequuntur expedita eos quisquam. Assumenda mollitia et velit aperiam voluptatum delectus iste inventore, corrupti ullam.</p>
      </section>
            <!-- FULL IMAGE PADDED  -->
      <div class="container-fluid bg-nt-100">
        <img class="img-fluid img-pagewidth padded fillheight"
          src="/assets/images/projects/line_drawings/line_doll.jpg">
      </div>

            <!-- *** Work Title Block - 80X60 *** -->
      <section class="copy-block bg-nt-100 pb-lg">
        <h4 class="copy-block-text-half txt-ss-h6 txt-nt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet veniam voluptatum, ratione error nemo quidem ullam.</h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-10 mt-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat minus cumque sequi quas nulla perferendis dignissimos doloremque maiores quaerat officiis?</p>
      </section>



      <!-- *** Work Title Block - SPECTRUM *** -->
      <section class="copy-block bg-white pt-lg">
        <h4 class="copy-block-text txt-ss-h4 txt-nt-100">Rhythm Spectrum</h4>
        <p class="copy-block-text txt-ss-sub2 txt-gr-50 mt-xs">2018-2019</p>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">Extensive color study with the ‘Bic’ colors. 64 intricate drawings made of 4 colors: red, green, blue and black. Shown at group exhibit 'The shape to come'. Each line was drawn individually in a process that took about 5 months to complete.</p>
      </section>
            <!-- FULL IMAGE PADDED  -->
      <div class="container-fluid bg-white mt-sm">
        <img class="img-fluid img-pagewidth padded fillheight"
          src="/assets/images/projects/line_drawings/line_64.jpg">
      </div>
      <section class="copy-block bg-white pb-md">
        <h4 class="copy-block-text-half txt-ss-h6 txt-nt-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet veniam voluptatum, ratione error nemo quidem ullam.</h4>
      </section>


<!-- *** BOTTOM BARS *** -->

      <!-- NEXT PROJECT BAR -->
        <div class="next-project-bar mt-lg">
          <router-link to="/made-digital-brand-book" class="next-project-link">
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


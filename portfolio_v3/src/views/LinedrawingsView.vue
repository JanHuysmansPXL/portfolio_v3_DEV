<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      buttonJakobSmitsText: 'Visit the Jakob Smitsmuseum',
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
  },
  mounted() {
  gsap.registerPlugin(ScrollTrigger);

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 200);

  // PROJECT HEADING IMAGE -- FULL WIDTH
  // Animates the full-width project header image.
  gsap.from(".project-heading-img", {
    opacity: 0.9,
    scale: 1.05,
    duration: 1.2,
    ease: "power2.out",
  });

  // INTRO BLOCK -- PROJECT TITLE + INFO
  // Animates the project info block on top -- with timeline.
  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-title-block",
      start: "top 75%",
      end: "bottom 100%",
      scrub: true,
    },
    defaults: { duration: 1, ease: "power2.out" }
  });
  scrollTl
    .from(".project-title-block-title", { opacity: 0, y: 32 })
    .from(".about-text", { opacity: 0, y: 16 }, "+=0.1")
    .from(".intro-title", { opacity: 0, y: 8 }, "-=0.1")
    .from(".intro-subtitle", { opacity: 0, y: 8 }, "-=0.2")
    .from(".details-block", { opacity: 0, y: 8 }, "-=0.1");
    // Stagger example for text wraps
    scrollTl.from(".details-wrap .text-wrap", {
      opacity: 0,
      y: 8,
      stagger: 0.2, // Elements animate with a 0.2 second delay between each
    });

  // H4 / H5 HEADINGS
  // Animates ALL h4 and h5 headings op the page on scroll.
    gsap.utils.toArray([".txt-ss-h4", ".txt-ss-h5"]).forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element, // Each element will animate when it enters the viewport
        start: "top 90%", // Start animation when the top of the element is 80% into the viewport
        end: "bottom 40%", // End when the bottom reaches 60%
        scrub: true, // Smooth scrolling effect
      },
      opacity: 0, // Start with hidden text
      y: 16, // Slide text up by 50px
      duration: .8, // 1-second animation duration
      ease: "power2.out", // Smooth easing for subtle effect
    });
  });

  // Animate Quote Block
  gsap.from(".quote-block-wrapper", {
    opacity: 0,
    y: 16,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".quote-block-wrapper",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none none",
    },
  });

  // COPY BLOCK -- DUO BLOCK -- HALF/HALF IMAGES.
  // Select all image wrapper blocks and loop through them
  gsap.utils.toArray('.images-wrapper').forEach((wrapper) => {
    // Animate odd (first) images from the left
    gsap.from(wrapper.querySelectorAll('.half-image:nth-child(odd)'), {
      opacity: 0,
      x: -32,                // Slide in from the left
      duration: 0.7,         // Animation duration
      ease: "power2.out",    // Smooth easing effect
      stagger: 0.2,          // Stagger effect for multiple images
      scrollTrigger: {
        trigger: wrapper,    // Trigger animation on scroll for each wrapper
        start: "top 90%",    // Start when top of wrapper is 80% in view
        end: "bottom 60%",   // End when bottom of wrapper is 60% in view
        scrub: true,         // Enable smooth scroll and reverse
      }
    });
  // Animate even (second) images from the right
  gsap.from(wrapper.querySelectorAll('.half-image:nth-child(even)'), {
    opacity: 0,
    x: 32,                 // Slide in from the right
    duration: 0.5,         // Animation duration
    ease: "power2.out",    // Smooth easing effect
    stagger: 0.2,          // Stagger effect for multiple images
    scrollTrigger: {
      trigger: wrapper,    // Trigger animation on scroll for each wrapper
      start: "top 90%",    // Start when top of wrapper is 80% in view
      end: "bottom 60%",   // End when bottom of wrapper is 60% in view
      scrub: true,         // Enable smooth scroll and reverse
    }
  });
});

  // FULL WIDTH IMAGE -- PADDED 
  // Animates ONLY the padded images (scale down from 100vw to current size)
  gsap.utils.toArray('.img-pagewidth.padded').forEach((image) => {
    gsap.from(image, {
      scaleX: 1.05, // Scale from 120% width (simulate 100vw)
      scaleY: 1.05, // Scale vertically if necessary (or keep 1 for no vertical scaling)
      opacity: 0.9, // Optional: start slightly transparent
      duration: 1.2, // Animation duration
      ease: "power2.out", // Smooth easing
      delay: 0.15,
      scrollTrigger: {
        trigger: image,    // Animate when the image is in the viewport
        start: "top 95%",  // Start animation when the top of the image is 90% in view
        end: "bottom 95%", // End when the bottom of the image is 60% in view
        scrub: false,       // Enable smooth reverse scroll
      }
    });
  });
  
  // Animate each grid-box individually with a subtle stagger
  gsap.utils.toArray('.grid-box').forEach((box, i) => {
  gsap.from(box, {
    opacity: 0,
    x: 32, // Slide in from the right
    duration: 0.8, // Animation duration
    ease: "power2.out", // Smooth easing effect
    delay: i * 0.04, // Subtle stagger based on index (i) of each box
    scrollTrigger: {
      trigger: box, // Trigger animation for each individual grid-box
      start: "top 95%", // Start when the top of the box is 80% in view
      end: "bottom 85%", // End when the bottom of the box is 80% in view
      scrub: false, // No scrubbing; play the animation normally
    }
  });
});

  // CTA BUTTON
  // Animate each CTA button individually
  gsap.utils.toArray('.cta-button').forEach((button) => {
    gsap.from(button, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: button.closest('.cta-wrapper'), // Use closest cta-wrapper for each button
        start: "top 95%", // Start when the top of the wrapper is 95% in view
        end: "bottom 80%", // End when the bottom of the wrapper is 80% in view
        scrub: true, // Scrub the animation based on the scroll
      }
    });
  });

},
};
</script>

<template>
  <div id="pagewrapper">
    <main class="maintest">

      <!-- HEADING COVER WITH SCREEN RESPONSIVE IMAGE (PICTURE) -->
      <div class="container-fluid">
        <picture>
          <source media="(max-width: 768px)"
            srcset="/assets/images/projects/line_drawings/linedrawings-cover-mobile.png" />
          <img class="img-fluid project-heading-img mid"
            src="/assets/images/projects/line_drawings/linedrawings-cover-1.png"
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
            <p class="intro-subtitle txt-ss-body1 txt-nt-60">The Line Drawings are a series of drawings made by a strict
              methodology. Each piece is built up out of hundreds of parallel lines. Trough these works colors and
              figuration are being examined.</p>
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
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">A set of 8 drawings made in Bic on A4 paper.
          Experiment with the 8 colors from the limited-edition colors of the brand.</p>
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
        <h4 class="copy-block-text-half txt-ss-h6 txt-nt-100">Each drawing contains the same 8 colors. Variation is
          generated by alternating a single color in a rythmical blend.</h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">One visual result of my process are the ‘trails’
          that become apparant due to the line-scanning drawing process.</p>
      </section>

      <!-- *** Work Title Block - FOUR SEASONS *** -->
      <section class="copy-block bg-white pt-lg">
        <h4 class="copy-block-text txt-ss-h4 txt-nt-100">Four Seasons</h4>
        <p class="copy-block-text txt-ss-sub2 txt-gr-50 mt-xs">After Jakob Smits | 2016-2017</p>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">Interpretation after the work of the Flemish
          painter/draftsman Jakob Smits. Depiction of the four seasons in a dedicated Bic-color. Technique-study for
          line-drawings with figuration.</p>
      </section>
      <!-- *** CAROUSEL SLIDER 3 - A3 DRAWINGS ***  -->
      <div class="container-fluid pb-md bg-white pt-md">
        <div class="grid-images-wrapper" ref="imageWrapperDigital">
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_lente.jpg"
              alt="Line Drawings -  The Four Seasons, Spring"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_zomer.jpg"
              alt="Line Drawings -  The Four Seasons, Summer"></div>
              <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_herfst.jpg"
                alt="Line Drawings -  The Four Seasons, Autumn"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/line_drawings/line_winter.jpg"
              alt="Line Drawings -  The Four Seasons, Winter"></div>
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
        <h4 class="copy-block-text-half txt-ss-h6 txt-nt-100">Each color is symbolically re-used according to Jakob
          Smits’ original work. All four works are part of a private collection.</h4>
      </section>

      <!-- *** FULL IMAGE -- FULL SCREEN WIDTH *** -->
      <div class="container-fluid py-lg">
        <picture>
          <source media="(max-width: 450px)" srcset="/assets/images/projects/line_drawings/line_coverimg.jpg" />
          <img class="img-fluid project-heading-img mid" src="/assets/images/projects/line_drawings/line_coverimg.jpg"
            alt="An image of the made icon graphic language">
        </picture>
        <div class="copy-block d-flex end">
          <p class="copy-block-text-quarter txt-width-65ch txt-ss-body2 txt-gr-50 mt-sm">Detail of the 'Summer'. Images are built up trough a repetition of lines and ink trails that are sporadically left behind during the process. Note the variable line thickness in highlights or shaded areas.</p>
        </div>
      </div>


      <!-- *** COPY BLOCK - DOUBLE TEXT ON AXIDRAW *** -->
      <section class="copy-block bg-nt-100 mt-md pt-md">
        <!-- *** Work Title Block - COLLIDER PRINTS *** -->
        <h4 class="copy-block-text txt-ss-h4 txt-nt-10">Autumn / Untitled</h4>
        <p class="copy-block-text txt-ss-sub2 txt-gr-50 mt-xs">After Jakob Smits | 2017</p>
      </section>
      <!-- CAROUSEL SLIDER 2 - AXIDRAW PLOTS  -->
      <div class="container-fluid bg-nt-100 py-md">
        <div class="grid-images-wrapper" ref="imageWrapper2">
          <div class="grid-box sm"><img class="grid-image"
              src="/assets/images/projects/line_drawings/lines-herfst-color-1@2x.png" alt="Autumn - Colour Study - P1">
          </div>
          <div class="grid-box sm"><img class="grid-image"
              src="/assets/images/projects/line_drawings/lines-herfst-color-detail@2x.png"
              alt="Untitled - Colour Study - P1"></div>
          <div class="grid-box sm"><img class="grid-image"
              src="/assets/images/projects/line_drawings/lines-herfst-color-detail-3@2x.png"
              alt="Untitled - Colour Study - P1"></div>

        </div>
        <div class="scroll-buttons mt-sm">
          <button class="scroll-button prev" @click="scrollPrevAlt">
            <img class="scroll-arrow" src="/assets/arrow-right-link.png" alt="arrow">
          </button>
          <button class="scroll-button next" @click="scrollNextAlt">
            <img class="scroll-arrow" src="/assets/arrow-right-link.png" alt="arrow">
          </button>
        </div>
        <section class="copy-block bg-nt-100 mt-md">
            <p class="copy-block-text-half txt-ss-body2 txt-gr-30">The Autumn piece was a painstaking test in figuration
              with alternating colors. In this work the process entails a mechanical approach to drawing. The drawing
              measures only 21 by 27 centimeters. The work served as a study towards a group exhibition
              in the Jakob Smitsmuseum, dedicated to the Belgian painter and draftsman. This drawing is now in the
              property of the museum. </p>
            <p class="copy-block-text-half txt-ss-body1 txt-gr-30"></p>
          <!-- CTA BUTTONS -->
          <div class="cta-wrapper container-fluid no-x-padding">
            <div class="cta-buttonbar">
              <button class="cta-button">
                <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
                <a href="https://www.jakobsmits.be/en" target="_blank" class="link-text">Visit the Jakob Smitsmuseum</a>
              </button>
            </div>
          </div>
        </section>
      </div>

      <!-- *** QUOTE BLOCK *** -->
      <section class="container-fluid bg-nt-10">
        <div class="quote-block-wrapper">
          <h6 class="txt-ss-h5 txt-pp-80">“We organised a museum takeover and installed fresh artworks, a new shop and even a summer bar. We won a bi-yearly award for it too.”</h6>
        </div>
      </section>

      <!-- *** Work Title Block - 80X60 *** -->
      <section class="copy-block bg-nt-100 pt-lg">
        <h4 class="copy-block-text txt-ss-h4 txt-nt-10 mt-sm">Doll</h4>
        <p class="copy-block-text txt-ss-sub2 txt-gr-30 mt-xs">2019</p>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-10 mt-sm">Another figurative piece. This work was made by commission of the current owner. Remake of a digital photograph that was destroyed.</p>
      </section>
      <!-- FULL IMAGE PADDED  -->
      <div class="container-fluid bg-nt-100">
        <img class="img-fluid img-pagewidth padded fillheight"
          src="/assets/images/projects/line_drawings/line_doll.jpg">
      </div>

      <!-- *** Work Title Block - 80X60 *** -->
      <section class="copy-block bg-nt-100 pb-lg">
        <h4 class="copy-block-text-half txt-ss-h6 txt-nt-10">The original work was a photograph. This version is in fact a recreation that was 'printed' in the manual drawing process.</h4>
      </section>



      <!-- *** Work Title Block - SPECTRUM *** -->
      <section class="copy-block bg-white pt-lg">
        <h4 class="copy-block-text txt-ss-h4 txt-nt-100">Rhythm Spectrum</h4>
        <p class="copy-block-text txt-ss-sub2 txt-gr-50 mt-xs">2018-2019</p>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">Extensive color study with the ‘Bic’ colors. 64
          unique drawings made of 4 colors in specific rythmic schemes. Red, green, blue and black. Shown at group exhibit 'The shape to come'.
          Each line was drawn individually in a process that took about 5 months to complete.</p>
      </section>
      <!-- FULL IMAGE PADDED  -->
      <div class="container-fluid bg-white mt-sm">
        <img class="img-fluid img-pagewidth padded fillheight" src="/assets/images/projects/line_drawings/line_64.jpg">
      </div>
      <section class="copy-block bg-white pb-md">
        <h4 class="copy-block-text-half txt-ss-h6 txt-nt-100">The construction of this work turned out to be a scientific puzzle. It became apparant that blending the 4 colors would in fact require a 3-dimensional model. Towards the center of the piece noise takes over saturation.</h4>
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


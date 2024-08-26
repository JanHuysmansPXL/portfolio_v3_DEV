<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  },
  mounted() {
  gsap.registerPlugin(ScrollTrigger);

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
  // Animates the CTA Button for the entire website.
  gsap.from(".cta-button", {
    opacity: 0,
    scale: 0.95,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cta-wrapper",
      start: "top 95%",
      end: "bottom 80%",
      scrub: true,
    }
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

      <!-- *** 01 / MINI TITLE - HANDMADE ? *** -->
      <div class="mini-title-container bg-white">
        <div class="mini-title-box pt-md">
          <p class="mini-title-label txt-gr-60">Handmade series</p>
        </div>
      </div>

      <!-- *** Work Title Block - 80X60 *** -->
      <section class="copy-block bg-white">
        <h4 class="copy-block-text txt-ss-h4 txt-nt-100">Collider 80x60</h4>
        <p class="copy-block-text txt-ss-sub2 txt-gr-50 mt-xs">2018</p>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">This set was made between 2021 and 2022. Each
          drawing
          is done freehanded in ink, 32x24cm on 220g Ca' Grain paper.</p>
      </section>

      <div class="container-fluid py-md bg-white">
        <div class="grid-images-wrapper" ref="imageWrapper">
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_large_1.jpg"
              alt="Collider 60 by 80 - P1">
          </div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_large_2.jpg"
              alt="Collider 60 by 80 - P2">
          </div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_large_3.jpg"
              alt="Collider 60 by 80 - P3">
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
        <h4 class="copy-block-text-half txt-ss-h6 txt-nt-100">These drawings are quite large, I spent around 6 weeks of
          hand drawing on each individual piece.</h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">I try to apply a systemic approach to each
          drawing, as
          I'm searching for patterns or images. Each work has been executed in ink. Some were executed by hand, others
          digitally, combining Adobe Illustrator and Inkscape with my Axidraw plotter.</p>
      </section>

      <!-- *** FULL IMAGE -- FULL SCREEN WIDTH *** -->
      <div class="container-fluid mt-md">
        <picture>
          <source media="(max-width: 450px)" srcset="/assets/images/projects/collider/collider-banner-1-mobile.png" />
          <img class="img-fluid project-heading-img mid" src="/assets/images/projects/collider/collider-banner-2.png"
            alt="An image of the made icon graphic language">
        </picture>
      </div>

      <!-- *** COPY BLOCK - DOUBLE TEXT ON AXIDRAW *** -->
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
        <!-- *** Work Title Block - COLLIDER PRINTS *** -->
        <h4 class="copy-block-text txt-ss-h4 txt-nt-10">Collider Prints</h4>
        <p class="copy-block-text txt-ss-sub2 txt-gr-50 mt-xs">2021-2022</p>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-10 mt-sm">This set was made between 2021 and 2022. Each
          drawing
          is done freehanded in ink, 32x24cm on 220g Ca' Grain paper.</p>
      </section>
      <!-- CAROUSEL SLIDER 2 - AXIDRAW PLOTS  -->
      <div class="container-fluid pb-lg bg-nt-100 pt-md">
        <div class="grid-images-wrapper" ref="imageWrapper2">
          <div class="grid-box sm"><img class="grid-image"
              src="/assets/images/projects/collider/collider_plotted1@0.5x.jpg" alt="Collider Plotted - P1"></div>
          <div class="grid-box sm"><img class="grid-image"
              src="/assets/images/projects/collider/collider_plotted2@0.5x.jpg" alt="Collider Plotted - P2"></div>
          <div class="grid-box sm"><img class="grid-image"
              src="/assets/images/projects/collider/collider_plotted3@0.5x.jpg" alt="Collider Plotted - P3"></div>
          <div class="grid-box sm"><img class="grid-image"
              src="/assets/images/projects/collider/collider_plotted4@0.5x.jpg" alt="Collider Plotted - P4"></div>
          <div class="grid-box sm"><img class="grid-image"
              src="/assets/images/projects/collider/collider_plotted5@0.5x.jpg" alt="Collider Plotted - P5"></div>
          <div class="grid-box sm"><img class="grid-image"
              src="/assets/images/projects/collider/collider_plotted6@0.5x.jpg" alt="Collider Plotted - P6"></div>
          <div class="grid-box sm"><img class="grid-image"
              src="/assets/images/projects/collider/collider_plotted7@0.5x.jpg" alt="Collider Plotted - P7"></div>
          <div class="grid-box sm">
            <div class="box-spacer"></div>
          </div>
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

      <!-- *** QUOTE BLOCK *** -->
      <section class="container-fluid bg-gr-80">
        <div class="quote-block-wrapper">
          <h6 class="txt-ss-h5 txt-nt-10">“The Axidraw robot is a wonderful tool. I learned that getting it up and
            running is its own craft.”</h6>
        </div>
      </section>

      <!-- *** Work Title Block - A3 *** -->
      <section class="copy-block bg-white pt-lg">
        <h4 class="copy-block-text txt-ss-h4 txt-nt-100">Collider A3</h4>
        <p class="copy-block-text txt-ss-sub2 txt-gr-50 mt-xs">2021-2022</p>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">This set was made between 2021 and 2022. Each
          drawing is done freehanded in ink, 32x24cm on 220g Ca' Grain paper.</p>
      </section>

      <!-- *** CAROUSEL SLIDER 3 - A3 DRAWINGS ***  -->
      <div class="container-fluid pb-md bg-white pt-md">
        <div class="grid-images-wrapper" ref="imageWrapperDigital">
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_d1@0.5x.jpg" alt="Collider Digital - P1"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_d2@0.5x.jpg" alt="Collider Digital - P2"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_d4@0.5x.jpg" alt="Collider Digital - P3"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_d6@0.5x.jpg" alt="Collider Digital - P4"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_d8@0.5x.jpg" alt="Collider Digital - P5"></div>
          <div class="grid-box sm"><img class="grid-image" src="/assets/images/projects/collider/collider_d10@0.5x.jpg" alt="Collider Digital - P6"></div>
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

      <!-- *** Work Title Block - 80X60  -->
      <section class="copy-block bg-white pb-md">
        <h4 class="copy-block-text-half txt-ss-h6 txt-nt-100">I did a few digital experiments based oh my analogous work.</h4>
        <p class="copy-block-text-half txt-ss-body1 txt-pp-80 mt-sm">I try to apply a systemic approach to each
          drawing, as I'm searching for patterns or images. Each work has been executed in ink. Some were executed by hand, others
          digitally, combining Adobe Illustrator and Inkscape with my Axidraw plotter.</p>
      </section>


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

<style lang="scss"></style>

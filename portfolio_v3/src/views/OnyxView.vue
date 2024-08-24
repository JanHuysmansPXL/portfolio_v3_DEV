<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  }, mounted() {
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
          <source media="(max-width: 768px)" srcset="/assets/images/projects/onyx/onyx-cover-mobile.png" />
          <img class="img-fluid project-heading-img mid" src="/assets/images/projects/onyx/onyx-cover-1.png"
            alt="An image of the made icon graphic language">
        </picture>
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
            <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
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


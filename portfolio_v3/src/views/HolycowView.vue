<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";
import HolyCowBrandSlides from "@/components/HolyCowBrandSlides.vue";

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
    HolyCowBrandSlides,
  },
  methods: {
    scrollPrev() {
            this.$refs.imageWrapper.scrollBy({ left: -316, behavior: 'smooth' });
            },
            scrollNext() {
            this.$refs.imageWrapper.scrollBy({ left: 316, behavior: 'smooth' });
            },
  },
  mounted() {
  gsap.registerPlugin(ScrollTrigger);

  // Animate Full Image (Heading)
  gsap.from(".project-heading-img", {
    opacity: 0.9,
    scale: 1.05,
    duration: 1.2,
    ease: "power2.out",
  });

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-title-block",
      start: "top 90%",
      end: "bottom 80%",
      scrub: true,
    },
    defaults: { duration: 1, ease: "power2.out" }
  });

  scrollTl
    .from(".project-title-block-title", { opacity: 0, y: 32 })
    .from(".about-text", { opacity: 0, y: 16 }, "+=0.1")
    .from(".intro-title", { opacity: 0, y: 8 }, "-=0.1")
    .from(".intro-subtitle", { opacity: 0, y: 8 }, "-=0.3")
    .from(".details-block", { opacity: 0, y: 8 }, "-=0.1");

    // Stagger example for text wraps
    scrollTl.from(".details-wrap .text-wrap", {
      opacity: 0,
      y: 8,
      stagger: 0.2, // Elements animate with a 0.2 second delay between each
    });

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

  // Animate Centered Mockup Image Scaling on Scroll -->
   // Animate all .mockup-image elements
   gsap.utils.toArray('.mockup-image').forEach((mockup) => {
    gsap.from(mockup, {
      scrollTrigger: {
        trigger: mockup.closest('.mockup-center'), // Target the parent container for each mockup
        start: "top 100%",   // Start animation when the top of the mockup container is 75% in the viewport
        end: "bottom 25%",  // End when the bottom of the container is 25% in the viewport
        scrub: true,        // Enable smooth reverse scrolling
      },
      opacity: 0.5,  // Start from transparent
      y: 80,         // Slide the image up by 50px
      duration: 1.2, // Duration of the animation
      ease: "power2.out",  // Smooth easing effect
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

  // TRIPLE IMAGES BOX ANIMATIONS
  gsap.from(".image", {
  opacity: 0,
  x: 32, // Slide from the right
  duration: .8,
  stagger: 0.04,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".image-wrapper",
    start: "top 80%",
    end: "bottom 80%",
    scrub: false, // Creates a smooth parallax effect
    }, 
  });

  // ANIMATE DUO IMAGES IN COPY - TEXT WRAPPER
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


  // Animate the dual images in the full-width image block
  gsap.from(".img-halfwidth", {
    opacity: 0,
    x: 32, // Slide from right
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2, // Stagger the animation
    scrollTrigger: {
      trigger: ".double-block",
      start: "top 80%",
      end: "bottom 80%",
      scrub: true,
    },
  });

  // Animate the CTA Button for the website
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

      <!-- FULL IMAGE -- FULL SCREEN WIDTH -->
      <div class="container-fluid mt-lg">
        <img class="img-fluid project-heading-img auto"
          src="/assets/images/projects/holycow/holycow-banner-red.png" alt="An image of some tinyhouse mockups">
      </div>


      <!-- Info Block - HOLY COW'S SKETCHES -->
      <section class="copy-block bg-nt-100 pb-lg">
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
      <section class="copy-block bg-white mt-md">
        <h4 class="copy-block-text txt-ss-h5 txt-nt-100">
          How 'bout the cow?
        </h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm mb-md">
          I prototyped an app for Holy Cow, and made a brand bible. A collection of guidelines for the brand. Checkit
          below.
        </p>
      </section>

      <HolyCowBrandSlides />

      <!-- MOCKUPS - HOLY COW INTERFACE TRIPLE -->
      <div class="container-fluid mockup-triple bg-nt-100 mt-sm">
        <div class="textbox">
          <h4 class="copy-block-text-half txt-ss-h5 txt-nt-10 mb-sm">Get flowing.</h4>
          <p class="txt-ss-body2 txt-gr-30">I designed a large part of the Holy Cow-interface. Our goal was to create an
            app where people could easily order and pick-up our delicious burgers. Designing the Holy-Cow interface was
            a smash. We tried to uphold an idea of zesty freshness, while trying to communicate our love for our planet,
            and it’s 4-bellied beings.</p>
        </div>
        <div class="image-wrapper">
          <img class="image" src="/assets/images/projects/holycow/holycow_interface/holycow_mockup_app4.png"
            alt="HolyCow Interface Detail Image - Shop">
          <img class="image" src="/assets/images/projects/holycow/holycow_interface/holycow_mockup_app2.png"
            alt="HolyCow Interface Detail Image - Checkout">
          <img class="image" src="/assets/images/projects/holycow/holycow_interface/holycow_mockup_app3.png"
            alt="HolyCow Interface Detail Image - Confirmed">
        </div>
      </div>


      <!-- NEXT PROJECT BAR -->
      <div class="next-project-bar">
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


<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";
import auroVideoHead from '/assets/images/projects/auro/auro-video-head.mp4';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      vidOne: auroVideoHead,
      buttonWebsiteText: 'Auro Website',
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

// MOCKUP IMAGE BLOCK
  const mockupImages = gsap.utils.toArray('.mockup-image');
  gsap.from(mockupImages, {
    scrollTrigger: {
      trigger: '.mockup-center',
      start: "top 75%",
      end: "bottom 25%",
      scrub: true, // Enable smooth reverse
      onEnter: () => console.log('Entered the trigger area'),
      onLeave: () => console.log('Left the trigger area'),
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power2.out",
    onStart: () => console.log('Animation Started'),
    onComplete: () => console.log('Animation Completed')
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


      <!-- FULL IMAGE  -->
      <div class="container-fluid">
        <img class="img-fluid project-heading-img" src="/assets/images/projects/auro/auro-heading@x2.png"
          alt="Auro project header">
      </div>

      <!-- TITLE BLOCK  -  1. WORDMARK -->
      <section id="AuroHead" class="project-title-block bg-nt-10">
        <h2 class="project-title-block-title">Auro</h2>
        <!-- INFO SECTION -->
        <div class="project-info-block mt-md">
          <div class="about-block">
            <p class="about-text txt-ss-sub2 txt-gr-50">About</p>
          </div>
          <div class="intro-block">
            <h6 class="intro-title txt-ss-h6">Webdesign and development of a wearables brand, powered by Midjourney.
            </h6>
            <p class="intro-subtitle txt-ss-body1">Lorem ipsum dolor sit amet consectetur. At posuere aliquet sit
              sagittis ornare id cras magna. Pellentesque tincidunt enim aliquam elit .Lorem ipsum dolor sit amet
              consectetur.</p>
          </div>
          <div class="details-block">
            <h5 class="details-title txt-ss-sub2">Branding / Social Marketing</h5>
            <div class="details-wrap">
              <div class="detail-bar">
                <div class="text-wrap">
                  <p class="bar-text">Platform</p>
                  <p class="bar-text">Web, Craft CMS, Wordpress</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Role</p>
                  <p class="bar-text">Designer / Developer</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Cliënt</p>
                  <p class="bar-text">PXL Digital*</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Website</p>
                  <a class="bar-text">View website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <!-- 01 / INTRO  -->
      <div class="mini-title-container bg-nt-100">
        <div class="mini-title-box pt-md">
          <p class="mini-title-label txt-nt-15">What is Auro ?</p>
        </div>
      </div>
      <!-- AURO INTRODUCTION -->
      <section class="quote-block bg-nt-100">
        <h4 class="quote-block-text-half txt-ss-h4 txt-nt-10">
          Auro is a fictional wearables brand with a futuristic product line.
        </h4>
        <p class="quote-block-text-half txt-ss-body1 txt-nt-10 mt-sm">The idea behind the Auro was to create a
          collection of high-tech wearables to complement contemporary lifestyles.</p>
      </section>

      <!-- CAROUSEL SLIDER FOR AURO PRODUCTS GRID  -->

      <div class="container-fluid py-xl bg-nt-100">
        <div class="grid-images-wrapper" ref="imageWrapper">
          <div class="grid-box"><img class="grid-image post" src="/assets/images/projects/auro/pods_1-min.png" alt="">
          </div>
          <div class="grid-box"><img class="grid-image post" src="/assets/images/projects/auro/pods_7-min.png" alt="">
          </div>
          <div class="grid-box"><img class="grid-image post" src="/assets/images/projects/auro/auroport_1-min.png"
              alt=""></div>
          <div class="grid-box"><img class="grid-image post" src="/assets/images/projects/auro/pods_1-min.png" alt="">
          </div>
          <div class="grid-box"><img class="grid-image post" src="/assets/images/projects/auro/pods_3-min.png" alt="">
          </div>
          <div class="grid-box"><img class="grid-image post" src="/assets/images/projects/auro/aurovision_2-min.png"
              alt=""></div>
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

      <!-- Heading Block - II -->
      <section class="quote-block bg-nt-100 pb-lg">
        <h4 class="quote-block-text-half txt-ss-h4 txt-nt-10">
          I used Midjourney to generate a consistent line of products that reflect the Auro philosophy.
        </h4>
        <p class="quote-block-text-half txt-ss-body1 txt-nt-10 mt-sm">Midjourney is an AI-tool to generate creative
          images. To visualise the Auro products I studied the use of advanced Midjourney settings. Experiments with
          prompting helped met to further align a total of 20 Auro products.</p>
      </section>

      <!-- FULL VIDEO  -->
      <div class="container-fluid bg-white">
        <video class="vid-pagewidth padded" autoplay loop playsinline muted>
          <source :src="vidOne" type="video/mp4"> Your browser does not support the video tag.
        </video>
      </div>

      <!-- Info Block - WEBSITE -->
      <section class="quote-block bg-white">
        <h4 class="quote-block-text-half txt-ss-h4 txt-nt-100">
          To develop the website I used Craft CMS, Vue and Wordpress.
        </h4>
        <p class="quote-block-text-half txt-ss-body1 txt-nt-100 mt-sm">This website was made as an exercise mostly. I
          developed
          the website three times. Once in Vue, another time with Wordpress and a third time with Craft CMS.</p>
      </section>

      <!-- CTA BUTTONS -->
      <div class="cta-wrapper container-fluid">
        <div class="cta-buttonbar">
          <button class="cta-button">
            <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
            <a href="https://auro-future.com/" target="_blank" class="link-text">{{ buttonWebsiteText }}</a>
          </button>
        </div>
      </div>

      <div class="container-fluid mockup-center bg-nt-10 mt-md">
        <img class="mockup-image" src="/assets/images/projects/auro/auro-mockup-mobile-1.png" alt="arrow">
        <img class="mockup-image" src="/assets/images/projects/auro/auro-mockup-mobile-1.png" alt="arrow">
        <img class="mockup-image" src="/assets/images/projects/auro/auro-mockup-mobile-1.png" alt="arrow">
      </div>

      <!-- QUOTE BLOCK "" -->
      <section class="container-fluid bg-pp-30">
        <div class="quote-block-wrapper">
          <h6 class="txt-ss-h5">“I really enjoyed working on the Auro project. I’ve got some new AI-tricks up my sleeves.“</h6>
        </div>
      </section>

      <!-- NEXT PROJECT BAR -->
      <div class="next-project-bar">
        <router-link to="/tinyhouse" class="next-project-link">
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


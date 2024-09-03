<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";
import kronolithVideoImport from '/assets/images/projects/kronolith/kronolith-mockup-video.mp4';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  
// TIMELINE ANIMATION FOR TITLE BLOCK.
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

    // STAGGER example for text wraps
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

  // IMAGES BOX ANIMATIONS
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


  // QUOTE DELAY
  gsap.from(".quote-block-wrapper", {
  opacity: 0,
  y: 16,
  duration: .8,
  delay: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".quote-block-wrapper",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play none none none",
  },
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
          <source media="(max-width: 768px)" srcset="/assets/images/projects/kronolith/kronolith-cover-mobile.png" />
          <img class="img-fluid project-heading-img mid" src="/assets/images/projects/kronolith/kronolith-cover-1.png"
            alt="An image of the Kronolith wall mounted clock">
        </picture>
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
            <h6 class="intro-title txt-ss-h6">The Kronolith is a wall mounted clock with a clickable and rotating outer rim.</h6>
            <p class="intro-subtitle txt-ss-body1 txt-nt-60">The clock has multiple states, personalisation options and a live circadian background. The singular controls of the product were the main constraint for this concept.</p>
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
        <img class="img-fluid project-banner-img auto"
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


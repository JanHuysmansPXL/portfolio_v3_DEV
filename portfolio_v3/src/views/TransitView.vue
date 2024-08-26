<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";
import transitVideoImport from '/assets/images/projects/transit/transit_video.mp4';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  },
  mounted() {
  gsap.registerPlugin(ScrollTrigger);

  // Animate video
  gsap.from(".project-heading-vid", {
    opacity: 0.9,
    scale: 1.05,
    duration: 1.2,
    ease: "power2.out",
  });

  // IMAGES BOX ANIMATIONS
  gsap.from(".grid-box", {
  opacity: 0.8,
  x: 32, // Slide from the right
  duration: .8,
  stagger: 0.04,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".grid-images-wrapper",
    start: "top 80%",
    end: "bottom 80%",
    scrub: false, // Creates a smooth parallax effect
    }, 
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

    gsap.to(".project-heading-img", {
    scale: 1.10,   // Increase the image scale
    y: -40,       // Move the image upward as it scrolls
    scrollTrigger: {
      trigger: ".project-heading-img",
      start: "top 90%",  // When the image is in view
      end: "bottom top", // End when the image is off-screen
      scrub: true,       // Smoothly animate while scrolling
    }
  });

  // QUOTE WITH DELAY
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


      <!-- FULL IMAGE  -->
      <div class="container-fluid">
        <div class="container-fluid bg-white">
        <video class="vid-pagewidth project-heading-vid " autoplay loop playsinline muted>
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
            <h6 class="intro-title txt-ss-h6">Five sculptures for Transit, a techno/house-event with headliners like Mall Grab.</h6>
            <p class="intro-subtitle txt-ss-body1 txt-nt-60">In 2018, I had the opportunity to design five large-scale sculptures for Transit, a techno/house event that brought big names like Mall Grab to the stage. The aim was to capture the energy of the event and elevate the space with striking installations.</p>
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
          Cutting-edge cardboard.
        </h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">The sculptures, each standing at 2.4 meters, were produced by a specialized team in the Netherlands using eco-friendly cardboard. These towering forms were positioned throughout the venue, transforming the space into a visual playground.</p>
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
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">The designs came to life using Cinema 4D, where I played with forms and structures to create the five pieces. I further refined them in Rhino, introducing a waffle-grid pattern that provides aesthetic and the structure of the object.</p>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">The sculptures weren’t just background decor — they were a focal point, setting the stage for an amazing night. They helped shape the look and feel of the event Transit, blending the music to create a high-energy atmosphere.
        </p>

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


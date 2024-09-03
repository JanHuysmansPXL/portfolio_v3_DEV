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
      madeWebsiteText: 'Made Website',
      vidOne: "/assets/images/projects/made/mockups/made-dbb-mobile-mockup-color-1.mp4",
      vidTwo: "/assets/images/projects/made/mockups/made-dbb-mobile-mockup-socials-1.mp4",
      vidThree: "/assets/images/projects/made/mockups/made-dbb-desktop-capture_1.mp4"

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


      <!-- FULL IMAGE  -->
      <!-- HEADING COVER WITH SCREEN RESPONSIVE IMAGE (PICTURE) -->
      <div class="container-fluid">
        <picture>
          <source media="(max-width: 768px)" srcset="/assets/images/projects/made/made-dbb-cover-mobile-1@2x.png" />
          <img class="img-fluid project-heading-img mid"
            src="/assets/images/projects/made/made-dbb-cover-desktop-1@2x.png"
            alt="An image of the Made Digital Brand Book project.">
        </picture>
      </div>


      <!-- TITLE BLOCK  -  1. WORDMARK -->
      <section id="AuroHead" class="project-title-block bg-nt-10">
        <h2 class="project-title-block-title">Made<br>Digital Brandbook</h2>
        <!-- INFO SECTION -->
        <div class="project-info-block mt-md">
          <div class="about-block">
            <p class="about-text txt-ss-sub2 txt-gr-30">About</p>
          </div>
          <div class="intro-block">
            <h6 class="intro-title txt-ss-h6">An interactive online brand guide for the updated Made brand identity.
            </h6>
            <p class="intro-subtitle txt-ss-body1 txt-nt-60">During my internship I was challenged to define, design and
              deliver an online brand guide for Made, an award-winning design agency.</p>
          </div>
          <div class="details-block">
            <h5 class="details-title txt-ss-sub2">UI / UX / Webdevelopment</h5>
            <div class="details-wrap">
              <div class="detail-bar">
                <div class="text-wrap">
                  <p class="bar-text">Year</p>
                  <p class="bar-text">2024</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Role</p>
                  <p class="bar-text">UI / UX-designer, Developer</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Cliënt</p>
                  <a href="https://www.made.be" target="_blank" class="bar-text">Made</a>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Tools</p>
                  <a class="bar-text">Figma, Adobe, Airtable, Vue</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- *** *** BODY *** *** -->

      <!-- Info Block - HOLY COW'S SKETCHES -->
      <section class="copy-block bg-nt-100 pb-lg">
        <div class="images-wrapper padding-md">
          <video class="vid-pagewidth" autoplay loop playsinline muted>
            <source :src="vidOne" type="video/mp4"> Your browser does not support the video tag.
          </video>
          <video class="vid-pagewidth" autoplay loop playsinline muted>
            <source :src="vidTwo" type="video/mp4"> Your browser does not support the video tag.
          </video>
        </div>
        <h4 class="copy-block-text-half txt-ss-h5 txt-nt-10">
          How I designed Made’s online brand book to boost brand consistency in 8 weeks.</h4>
      </section>

      <!-- FULL VIDEO -- MOCKUP iMAC SCREEN-->
      <div class="container-fluid bg-nt-100">
        <video class="vid-pagewidth padded desktop" autoplay loop playsinline muted>
          <source :src="vidThree" type="video/mp4"> Your browser does not support the video tag.
        </video>
      </div>

      <!-- 01 / POSTS  -->
      <div class="mini-title-container bg-nt-100">
        <div class="mini-title-box pt-md">
          <p class="mini-title-label txt-nt-15">Discovery: Benchmarking and interviews.</p>
        </div>
      </div>

      <!-- Info Block - Socials -->
      <section class="quote-block bg-nt-100 pb-lg">
        <h4 class="quote-block-text-half txt-ss-h4 txt-nt-10">
          I led qualitative interviews with key stakeholders to identify where the brand book could have the most
          impact.
        </h4>
        <p class="quote-block-text-half txt-ss-body1 txt-nt-10 mt-sm">There was a need for a reference that is
          accessible to the various profiles within Made, regardless of their background or toolkit. An online brand
          guide could prove to be valuable for different users at Made, enhancing brand consistency and serving as a
          useful onboarding tool for new colleagues to quickly become familiar with existing methods.</p>
      </section>

      <!-- FULL IMAGE -- FULL SCREEN WIDTH -->
      <div class="container-fluid">
        <img class="img-fluid project-banner-img" src="/assets/images/projects/made/made-context-banner.webp"
          alt="An image of the made company">
      </div>

      <!-- FULL IMAGE -- FULL SCREEN WIDTH -->
      <div class="container-fluid bg-nt-10 pb-md pb-mobile-sm">
        <img class="img-fluid img-pagewidth padded fillheight"
          src="/assets/images/projects/made/made-dbb-rtb-artifact.png"
          alt="An image of the Made brand guide UX-process">
          <img class="img-fluid img-pagewidth padded-side fillheight"
          src="/assets/images/projects/made/made-dbb-sitemap.png"
          alt="An image of the Made brand guide UX-process">
      </div>

      <!-- Heading Block - II -->
      <section class="quote-block bg-nt-100 pb-md pt-md">
        <h4 class="quote-block-text-half txt-ss-h5 txt-nt-10">
          The general brand overview was a major deliverable. I mapped all existing touchpoints and added an overall
          structure in Whimsical and Figma.
        </h4>
        <p class="quote-block-text-half txt-ss-body1 txt-nt-10 mt-sm">This resulted in a wireframe model and visual design. During the design sprint iterations were made based on guerilla tests in the office. We also defined an MVP in order to keep a good balance between value and scope.
        </p>
      </section>

      <!-- FULL IMAGE -- FULL SCREEN WIDTH -->
      <div class="container-fluid bg-nt-100">
        <img class="img-fluid img-pagewidth padded fillheight" src="/assets/images/projects/made/made-dbb-design.png"
          alt="An image of the Made brand guide UX-process">
      </div>

      <!-- 01 / POSTS  -->
      <div class="mini-title-container bg-gr-80">
        <div class="mini-title-box pt-md">
          <p class="mini-title-label txt-gr-30">Deliver: developing the website.</p>
        </div>
      </div>


      <!-- Info Block - WEBSITE -->
      <section class="quote-block bg-gr-80 pb-md">
        <h4 class="quote-block-text-half txt-ss-h4 txt-nt-10">
          Fully responsive and actionable.
        </h4>
        <p class="quote-block-text-half txt-ss-body1 txt-nt-10 mt-sm">To make the website more
          actionable, features such as copying color codes and downloading fonts have been implemented. The website also
          includes do's and don’ts to encourage consistency and help avoid mistakes. This makes the website an
          interactive tool.
        </p>
      </section>

      <!-- FULL IMAGE -- FULL SCREEN WIDTH -->
      <div class="container-fluid">
        <img class="img-fluid project-banner-img auto"
          src="/assets/images/projects/made/mockups/made-dbb-duo-mockup-img.png"
          alt="An image of 2 mockups comparing the mobile and desktop Brand Book Website.">
      </div>

      <!-- Info Block - WEBSITE -->
      <section class="quote-block bg-white mt-md">
        <h4 class="quote-block-text-half txt-ss-h4 txt-nt-100">
          "I integrated Airtable APIs to build a flexible, easy-to-update content management system that allows the brand to evolve over time."
        </h4>
        <p class="quote-block-text-half txt-ss-body1 txt-nt-100 mt-sm">Content on the website can be dynamically loaded
          via Airtable, allowing for sustainable maintenance and expansion by Made employees.
        </p>
        <!-- FULL IMAGE -- FULL SCREEN WIDTH -->
      <div class="container-fluid bg-nt-10 mt-md">
        <img class="img-fluid img-pagewidth fillheight" src="/assets/images/projects/made/made-dbb-airtable-api.png"
          alt="An image of the Made brand guide UX-process">
      </div>
      </section>

      <!-- CTA BUTTONS -->
      <div class="cta-wrapper container-fluid">
        <div class="cta-buttonbar">
          <button class="cta-button">
            <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
            <a href="https://www.made.be/" target="_blank" class="link-text">{{ madeWebsiteText }}</a>
          </button>
        </div>
      </div>

      <div class="container-fluid mockup-center bg-nt-10 mt-md">
        <img class="mockup-image" src="/assets/images/projects/made/mockups/made-dbb-iphone-1.png"
          alt="Made Digital brandbook iphone Mockup">
        <img class="mockup-image" src="/assets/images/projects/made/mockups/made-dbb-iphone-2.png"
          alt="Made Digital brandbook iphone Mockup">
        <img class="mockup-image" src="/assets/images/projects/made/mockups/made-dbb-iphone-3.png"
          alt="Made Digital brandbook iphone Mockup">
      </div>

      <!-- NEXT PROJECT BAR -->
      <div class="next-project-bar">
        <router-link to="/kronolith" class="next-project-link">
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


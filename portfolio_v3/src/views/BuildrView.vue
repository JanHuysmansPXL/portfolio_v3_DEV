<script>
import BuildrBrandSlides from "@/components/BuildrBrandSlides.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      buttonWebsiteText: 'Buildr Website',
    };
  },
  components: {
    FooterComponent,
    MarqueeBar,
    BuildrBrandSlides,
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

  // ANIMATE DUO IMAGES IN COPY - TEXT WRAPPER
  // Animate the first image from the left (odd images)
  gsap.from(".images-wrapper .half-image:nth-child(odd)", {
    opacity: 0,
    x: -32,               // Slide in from the left (-100px)
    duration: .7,           // Animation duration
    ease: "power2.out",    // Smooth easing effect
    stagger: 0.2,          // Stagger effect for multiple images
    scrollTrigger: {
      trigger: ".images-wrapper",  // Trigger animation on scroll
      start: "top 90%",            // Start when top of wrapper is 80% in view
      end: "bottom 60%",           // End when bottom of wrapper is 60% in view
      scrub: true,                 // Enable smooth scroll and reverse
    }
  });

  // Animate the second image from the right (even images)
  gsap.from(".images-wrapper .half-image:nth-child(even)", {
    opacity: 0,
    x: 32,                // Slide in from the right (+100px)
    duration: .5,           // Animation duration
    ease: "power2.out",    // Smooth easing effect
    stagger: 0.2,          // Stagger effect for multiple images
    scrollTrigger: {
      trigger: ".images-wrapper",  // Trigger animation on scroll
      start: "top 90%",            // Start when top of wrapper is 80% in view
      end: "bottom 60%",           // End when bottom of wrapper is 60% in view
      scrub: true,                 // Enable smooth scroll and reverse
    }
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


      <!-- FULL IMAGE  -->
      <div class="container-fluid">
        <img class="img-fluid project-heading-img" src="/assets/images/projects/buildr/buildr_mockupsgrid.png"
          alt="An image of the made icon graphic language">
      </div>


      <!-- TITLE BLOCK  -  1. WORDMARK -->
      <section class="project-title-block bg-nt-10">
        <h2 class="project-title-block-title">Buildr</h2>
        <!-- INFO SECTION -->
        <div class="project-info-block mt-md">
          <div class="about-block">
            <p class="about-text txt-ss-sub2 txt-gr-50">About</p>
          </div>
          <div class="intro-block">
            <h6 class="intro-title txt-ss-h6">Buildr is a digital solution to help construction workers match with their
              dream jobs.</h6>
            <p class="intro-subtitle txt-ss-body1 txt-nt-60">Buildr. is a (fictional) job-matching app for construction,
              metal and logistics. We did the branding, the interface for mobile and desktop, and developed the website
              for the product.</p>
          </div>
          <div class="details-block">
            <h5 class="details-title txt-ss-sub2">UI / UX / Webdevelopment</h5>
            <div class="details-wrap">
              <div class="detail-bar">
                <div class="text-wrap">
                  <p class="bar-text">Year</p>
                  <p class="bar-text">2023</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Role</p>
                  <p class="bar-text">Digital Designer, Developer</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Cliënt</p>
                  <p class="bar-text">PXL Digital*</p>
                </div>
                <div class="text-wrap">
                  <p class="bar-text">Tools</p>
                  <a class="bar-text">Adobe XD, HTML, CSS, JS</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Info Block - Buildr Brief + Mockup -->
      <section class="copy-block bg-white mt-md mb-md">
        <h5 class="copy-block-text-half txt-ss-h5 txt-nt-100">
          The brief: Build a job-matching app and an accessible website for its users, develop the brand identity for
          the product and empower users to find work more easily.</h5>
      </section>

      <!-- MOCKUP CENTERED -->
      <div class="container-fluid mockup-center bg-white mt-md">
        <img class="mockup-image" src="/assets/images/projects/buildr/buildr_animated_mock_app3.gif" alt="arrow">
      </div>

      <!-- QUOTE BLOCK "" -->
      <section class="container-fluid bg-nt-10">
        <div class="quote-block-wrapper">
          <h6 class="txt-ss-h5 txt-gr-80">“Buildr started with a mission: To help people build their dreams.”</h6>
        </div>
      </section>

      <!-- Info Block - Buildr Brief + Mockup -->
      <section class="copy-block bg-white mt-md mb-md">
        <h5 class="copy-block-text-half txt-ss-h6 txt-nt-100">
          We designed the brand identity first. Our team's aim was to create a fairly simple but recognisable brand,
          which would appeal to a broad crowd of workers.</h5>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-60 mt-sm">For the branding I teamed with Eline Moesen, a very
          talented classmate. The Buildr logo we defined represents the connection we try to inspire between people.
          Find some exerpts of the full brand guide below.</p>
      </section>

      <BuildrBrandSlides />

      <!-- FULL IMAGE -- FULL SCREEN WIDTH -->
      <div class="container-fluid py-lg">
        <img class="img-fluid project-heading-img" src="/assets/images/projects/buildr/buildr-banner-1.png"
          alt="An image of the made icon graphic language">
      </div>

      <!-- Info Block - Buildr Brief + Mockup -->

      <section class="copy-block bg-white mt-md mb-md">
        <h4 class="copy-block-text-half txt-ss-h5 txt-nt-100">
          For our audience, it was essential that our platform be accessible, easy-to-use, and down-to-earth. No
          frills.<br>— ‘You are not your user.’
        </h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-60 mt-sm">We gathered some very useful date from 20
          construction workers. Based on their input we managed to define the key priorities for our app. Workers mainly
          wanted to learn about the employers company culture, to reduce time needed for interviews or to present
          themselves online in a better way.</p>
      </section>

      <!-- FULL IMAGE PADDED  -->
      <div class="container-fluid double-block bg-white">
        <img class="img-fluid img-halfwidth fillheight" src="/assets/images/projects/buildr/buildr_persona_jos.jpg">
        <img class="img-fluid img-halfwidth fillheight" src="/assets/images/projects/buildr/buildr_research1.png">
      </div>

      <!-- FULL VIDEO  
      <div class="container-fluid bg-nt-100">
            <video class="vid-pagewidth padded" autoplay loop>
              <source :src="vidOne" type="video/mp4"> Your browser does not support the video tag.
            </video>
      </div>  -->

      <!-- COPY BLOCK -- BUILDR SKETCHES -->
      <section class="copy-block bg-nt-100 py-md mt-lg">
        <h4 class="copy-block-text-half txt-ss-h4 txt-nt-10">Designing the app.</h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-10 mt-sm">While making the app we went through several
          stages. From sketches to information architecture and wireframes. The end result was a visual design and
          working prototype.</p>
        <div class="images-wrapper mt-md">
          <img src="/assets/images/projects/buildr/buildr_sketch_UI3.jpg" alt="Buildr Sketch 1" class="half-image">
          <img src="/assets/images/projects/buildr/buildr_sketch_UI4.jpg" alt="Buildr Sketch 2" class="half-image">
        </div>
        <h4 class="copy-block-text-half txt-ss-h4 txt-nt-10 mt-lg">Wireframes were made in Adobe XD. We made a flow for
          the consumer, and a separate one for the professional user.</h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-10 mt-sm">For the UI-design I partnered with my teammate
          Eline Moesen.
          It’s a pleasure to work with talented people. I learned to trust my team, and to find a common ground on
          design-related issues.</p>
      </section>

      <!-- MOCKUP CENTERED -->
      <div class="container-fluid mockup-center bg-nt-100">
        <img class="mockup-image" src="/assets/images/projects/buildr/buildr_animated_mock_wire.gif" alt="arrow">
      </div>
      <!-- QUOTE BLOCK "" -->
      <section class="container-fluid bg-nt-10">
        <div class="quote-block-wrapper">
          <h6 class="txt-ss-h5 txt-gr-80">“I got a free student upgrade after I needed over 500 elements to place on my
            boards. — Thank you, Whimsical.”</h6>
        </div>
      </section>

      <!-- ADD IMAGES HERE
       ***
       ***
       ***
      -->

      <!-- TEXT BLOCK - WEBSITE -->
      <section class="copy-block bg-white mt-lg py-md">
        <h4 class="copy-copy-text-half txt-ss-h4 txt-nt-100">
          The website.
        </h4>
        <p class="copy-block-text-half txt-ss-body1 txt-nt-100 mt-sm">For the website I teamed with Yoritt Borkelmans.
          I did a large chunk of the HTML, CSS and Bootstrap 5.
          Yoritt engineered the interactions and dynamics in JavaScript.</p>
        <!-- CTA BUTTONS -->
        <div class="cta-wrapper no-x-padding container-fluid">
          <div class="cta-buttonbar">
            <button class="cta-button">
              <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
              <a href="https://graceful-gingersnap-7a47a3.netlify.app/index.html" target="_blank" class="link-text">{{
                buttonWebsiteText }}</a>
            </button>
          </div>
        </div>
      </section>



      <!-- NEXT PROJECT BAR -->
      <div class="next-project-bar">
        <router-link to="/auro" class="next-project-link">
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
.text-mask {
  overflow: hidden; /* Hide content that overflows */
  height: 100%; /* Keep text fully hidden initially */
}

</style>


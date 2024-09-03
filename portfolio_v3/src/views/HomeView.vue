<script>
import FooterComponent from '@/components/FooterComponent.vue';
import MarqueeBar from "@/components/MarqueeBar.vue";
import SelectedProjectsList from "@/components/SelectedProjectsList.vue";
import SelectedProjectsListTest from '@/components/SelectedProjectsListTest.vue';
import CurriculumComponent from '@/components/CurriculumComponent.vue';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


    export default {
    data() {
        return {
            /* LIST OF NAVBAR LINKS */
            buttonAboutText: "Read my story",
            buttonContactText: "Get in touch",
            buttonWorkText: "See my work",

            isSidebarOpen: false,
            }
        },
        components: {
            FooterComponent,
            MarqueeBar,
            SelectedProjectsList,
            SelectedProjectsListTest,
            CurriculumComponent,
        },
        methods: {
            toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
            }, 
        },
        computed: {
            
        },
        mounted() {

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 200);

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
            y: 16, // Slide text up by 16px
            duration: .8, // 1-second animation duration
            ease: "power2.out", // Smooth easing for subtle effect
            });
        });

        // IMAGE ANIMATION (Fade-in and move on Y-axis)
        gsap.from(".home-intro-img", {
            scrollTrigger: {
                trigger: ".home-intro-img", // Starts when the image is in view
                start: "top 80%", // Animation starts when the image's top is 80% in the viewport
                end: "bottom 60%", // Ends when the image's bottom is 60% in view
                scrub: true, // Smooth scrolling effect
            },
            opacity: 0, // Fade-in effect
            x: 120,
            y: 0, // Move upwards by 40px
            duration: .3, // Duration of the animation
            ease: "power3.out", // Smooth easing
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
                trigger: ".cta-wrapper",
                start: "top 95%", // Start when the top of the wrapper is 95% in view
                end: "bottom 80%", // End when the bottom of the wrapper is 80% in view
                scrub: true, // Scrub the animation based on the scroll
            }
            });
        });

        ScrollTrigger.refresh(true);

        },
    }
</script>

<template>
    <div id="pagewrapper">

        <!-- THIS IS THE MAIN BODY -> RIGHT SIDE -- FILLS 100% WIDTH -->
        <main class="maintest">

            <!-- INTRO TEXT + CTA BUTTONS -->
            <section class="home-intro-block">
                <div class="home-intro-title-bar ps-md">
                    <h3 class="home-intro-title txt-nt-100">Digital designer & artist, based in Antwerp.</h3>
                </div>
                <div class="home-intro-box mt-md">
                    <div class="home-intro-column-left">
                        <h4 class="quote-block-text txt-nt-60 mt-lg">
                            I create brands, build user interfaces, and design experiences. 
                            From websites to products, my work is about crafting meaningful interactions that resonate with people.
                        </h4>
                        <h4 class="quote-block-text txt-nt-60">
                            I strongly believe design is a force of change.
                            Finding viable solutions for actual people is something I value a lot.
                        </h4>
                        <h4 class="quote-block-text txt-nt-60">
                            Beyond design, I explore art —focusing on rhythm, color, and modularity. 
                            It’s another way for me to push my creative boundaries.
                        </h4>

                        <!-- CTA BUTTONS -->
                        <div class="cta-wrapper container-fluid no-x-padding">
                            <div class="cta-buttonbar">
                                <button class="cta-button">
                                    <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
                                    <router-link to="/about" class="link-text">{{ buttonAboutText }}</router-link>
                                </button>
                                <button class="cta-button">
                                    <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
                                    <router-link to="/" class="link-text">{{ buttonContactText }}</router-link>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div class="home-intro-column-right mt-xl ms-md">
                        <img class="home-intro-img mt-xxl img-fluid" src="/assets/portrait.png"
                            alt="The right kind of difficult - Man looking at whiteboard">
                    </div>
                </div>
            </section>

            <SelectedProjectsListTest />

            <!-- QUOTE - Experience -->
            <section class="copy-block mt-lg">
                <h3 class="copy-block-text-full txt-ss-h4 text-width-60">Find me for
                </h3>
            </section>
            <!-- SERVICE 1 -->
            <section class="service-box">
                <div class="service-column-left">
                    <p class="service-label txt-ss-sub2 txt-nt-60">Branding & Identity</p>
                </div>
                <div class="service-column-right">
                    <h3 class="txt-ss-h5 txt-pp-80 indent-xl .txt-width-65ch">I help businesses stand out with distinctive branding. From logos to color schemes, I create visuals that tell a story and stick with people.
                    </h3>
                </div>
            </section>

            <!-- SERVICE 2 -->
            <section class="service-box">
                <div class="service-column-left">
                    <p class="service-label txt-ss-sub2 txt-nt-60">Interface design</p>
                </div>
                <div class="service-column-right">
                    <h3 class="txt-ss-h5 txt-pp-80 indent-xl .txt-width-65ch">I build user-friendly
                        interfaces that are both beautiful and functional. By focusing on user needs and behavior, I
                        design digital experiences that are engaging and visually striking.
                    </h3>
                </div>
            </section>

            <!-- SERVICE 3 -->
            <section class="service-box">
                <div class="service-column-left">
                    <p class="service-label txt-ss-sub2 txt-nt-60">Webdesign & Development</p>
                </div>
                <div class="service-column-right">
                    <h3 class="txt-ss-h5 txt-pp-80 indent-xl .txt-width-65ch">I craft websites that look good and feel effortless to navigate. They’re fast, responsive, and crafted to work smoothly across all devices, putting the user first.
                    </h3>
                </div>
            </section>

            <!-- CTA BUTTONS -->
            <div class="cta-wrapper container-fluid mt-sm mb-md">
                <div class="cta-buttonbar">
                    <button class="cta-button">
                        <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
                        <router-link to="/work" class="link-text">{{ buttonWorkText }}</router-link>
                    </button>
                    <button class="cta-button">
                        <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
                        <a href="mailto:jan_huysmans@outlook.com" class="link-text">Get in touch</a>
                    </button>
                </div>
            </div>

            <CurriculumComponent />

        <!-- *** MARQUEE BAR *** -->
        <MarqueeBar />
        <!-- *** FOOTER *** -->
        <FooterComponent />
        </main>
    </div>

</template>

<style lang="scss">

</style>
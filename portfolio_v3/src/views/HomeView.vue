<script>
import FooterComponent from '@/components/FooterComponent.vue';
import MarqueeBar from "@/components/MarqueeBar.vue";
import SelectedProjectsList from "@/components/SelectedProjectsList.vue";


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
        methods: {
            toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
            }, 
        },
        computed: {
            
        },
        components: {
            FooterComponent,
            MarqueeBar,
            SelectedProjectsList,
        },
    }
</script>

<template>
    <div id="pagewrapper">

        <!-- THIS IS THE MAIN BODY -> RIGHT SIDE -- FILLS 100% WIDTH -->
        <main class="maintest pt-lg">

            <!-- INTRO TEXT + CTA BUTTONS -->
            <section class="home-intro-block">
                <div class="home-intro-title-bar ps-md">
                    <h3 class="home-intro-title">Jan Huysmans is a digital designer & artist living in the diamond city
                        of Antwerp.</h3>
                </div>
                <div class="home-intro-box mt-md">
                    <div class="home-intro-column-left">
                        <h4 class="quote-block-text mt-md">I love building brands, user interfaces or any design
                            oriënted system. I'm a designer who likes to create new experiences, products or websites.
                        </h4>
                        <h4 class="quote-block-text">I strongly believe design is a democratic force of change.
                            Finding solutions to user needs is something I value a lot.</h4>
                        <h4 class="quote-block-text">Sometimes I dabble in art. My artistic work is based on
                            studies of rhythm, color and pattern. Mostly on themes like repetition, modularity and
                            automation.
                        </h4>

                        <!-- CTA BUTTONS -->
                        <div class="cta-wrapper container-fluid no-x-padding">
                            <div class="cta-buttonbar">
                                <button class="cta-button">
                                    <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
                                    <router-link to="/work" class="link-text">{{ buttonAboutText }}</router-link>
                                </button>
                                <button class="cta-button">
                                    <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
                                    <router-link to="/home" class="link-text">{{ buttonContactText }}</router-link>
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

            <SelectedProjectsList class="py-xl"/>

            <!-- *** DOUBLE IMAGES *** BLOCK  
            <section class="story-block container-fluid mt-xl">
                <div class="story-title-bar ps-md">
                    <h3 class="txt-ss-body2 txt-gr-60">Services</h3>
                </div>
                <div class="story-box-images mt-sm">
                    <div class="story-images-third">
                        <img class="story-img--sm img-fluid" src="/assets/portrait.png"
                            alt="Simon Explaining something">
                    </div>
                    <div class="story-images-full">
                        <img class="story-img--sm img-fluid" src="/assets/images/projects/collider/collider_plotted1@0.5x.jpg"
                            alt="a pen writing on a whiteboard">
                    </div>
                </div>
            </section> -->

            <!-- SERVICES BLOCK *** DEPRECATED ***
            <section class="actions-box">
                <div class="actions-column-left">
                    <span>
                        <p class="txt-ss-h6 me-md">◆</p>
                    </span>
                    <p class="actions-label txt-ss-h5">Branding<br>& Identity</p>
                </div>
                <div class="actions-column-right">
                    <h3 class="actions-column-txt txt-ss-body1">I help businesses stand out by creating unique brand identities that capture their essence. From logos to color palettes, I design cohesive visual systems that tell your brand's story and leave a lasting impression.</h3>
                </div>
            </section>  -->
            <!-- SERVICES BLOCK *** DEPRECATED *** 
            <section class="actions-box">
                <div class="actions-column-left">
                    <span>
                        <p class="txt-ss-h6 me-md">◆</p>
                    </span>
                    <p class="actions-label txt-ss-h5">Interface<br>Design</p>
                </div>
                <div class="actions-column-right">
                    <h3 class="actions-column-txt txt-ss-body1">I specialize in creating user-friendly interfaces that are both beautiful and functional. By focusing on user needs and behavior, I design digital experiences that are seamless, engaging, and visually stunning.</h3>
                </div>
            </section>-->
            <!-- SERVICES BLOCK *** DEPRECATED ***
            <section class="actions-box">
                <div class="actions-column-left">
                    <span>
                        <p class="txt-ss-h6 me-md">◆</p>                    </span>
                    <p class="actions-label txt-ss-h5">Webdesign<br>& Development</p>
                </div>
                <div class="actions-column-right">
                    <h3 class="actions-column-txt txt-ss-body1">I design and develop responsive websites that not only look great but also perform exceptionally well. From concept to launch, I ensure your site is optimized for all devices and delivers a smooth user experience.</h3>
                </div>
            </section> 
            
            >>> ENDS HERE -->

            <!-- QUOTE - Experience -->
            <section class="copy-block mt-xl">
                <h3 class="copy-block-text-full txt-ss-h3 text-width-60">Find me for
                </h3>
            </section>
            <!-- SERVICE 1 -->
            <section class="service-box">
                <div class="service-column-left">
                    <p class="service-label txt-ss-sub2 txt-nt-60">Branding & Identity</p>
                </div>
                <div class="service-column-right">
                    <h3 class="txt-ss-h5 txt-pp-80 indent-xl .txt-width-65ch">I help businesses stand out by creating
                        unique brand identities that capture their essence. From logos to color palettes, I design
                        cohesive visual systems that tell your brand's story and leave a lasting impression.
                    </h3>
                </div>
            </section>

            <!-- SERVICE 2 -->
            <section class="service-box">
                <div class="service-column-left">
                    <p class="service-label txt-ss-sub2 txt-nt-60">Interface design</p>
                </div>
                <div class="service-column-right">
                    <h3 class="txt-ss-h5 txt-pp-80 indent-xl .txt-width-65ch">I specialize in creating user-friendly
                        interfaces that are both beautiful and functional. By focusing on user needs and behavior, I
                        design digital experiences that are seamless, engaging, and visually stunning.
                    </h3>
                </div>
            </section>

            <!-- SERVICE 3 -->
            <section class="service-box">
                <div class="service-column-left">
                    <p class="service-label txt-ss-sub2 txt-nt-60">Webdesign & Development</p>
                </div>
                <div class="service-column-right">
                    <h3 class="txt-ss-h5 txt-pp-80 indent-xl .txt-width-65ch">I design and develop responsive websites
                        that not only look great but also perform exceptionally well. From concept to launch, I ensure
                        your site is optimized for all devices and delivers a smooth user experience.
                    </h3>
                </div>
            </section>

            <!-- CTA BUTTONS -->
            <div class="cta-wrapper container-fluid mt-md">
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


                            <!-- *** METRICS *** -->
                <section id="metrics" class="metrics-box container-fluid bg-pp-30 mt-md">
                <div class="metric-column">
                    <p class="metric-label">Awards</p>
                    <h1 class="metric-number txt-ss-h0">3</h1>
                    <p class="metric-text">Over the years I've received a few awards by notable cultural organisations for my analogous work. I have however made a shift to digital in the past years.</p>
                </div>
                <div class="metric-column">
                    <p class="metric-label">Exhibitions</p>
                    <h1 class="metric-number txt-ss-h0">+15</h1>
                    <p class="metric-text">I took part in a few group exhibitions. In some I took part as a co-curator or organiser.</p>
                </div>
                <div class="metric-column">
                    <p class="metric-label">Volume</p>
                    <h1 class="metric-number txt-ss-h0">11</h1>
                    <p class="metric-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum fuga quae excepturi illum, ullam dolorem laborum cumque id..</p>
                </div>
            </section> 

        <!-- *** MARQUEE BAR *** -->
        <MarqueeBar />
        <!-- *** FOOTER *** -->
        <FooterComponent />
        </main>
    </div>

</template>

<style lang="scss">

</style>
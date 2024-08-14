<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';


    export default {
    data() {
        return {
            /* LIST OF NAVBAR LINKS */
            linkMissionText: "Mission",
            linkVoiceText: "Tone of voice",
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
            NavbarComponent
        },
    }
</script>

<template>

    <!--
        <header class="brightheader container-fluid">
        <div class="b-header-title-block">
            <h2 class="txt-ss-h3 txt-nt-100">Jan Huysmans is a digital designer & artist living in the diamond city of Antwerp.</h2>
            <button class="menu-toggle" @click="toggleSidebar">Menu</button>
        </div>
    </header>

    THIS IS THE PAGE WRAPPER THAT CONTAINS THE SIDEBAR AND THE MAIN CONTENT, NOT THE HEADER. -->
    <div id="pagewrapper">
        <!-- THIS IS THE MAIN BODY -> RIGHT SIDE -- FILLS 100% WIDTH -->
        <NavbarComponent/>

        <main class="maintest pt-lg">

            <!-- QUOTE - Experience
        --- TIJDELIJK WEGGEHAALD
            <section class="quote-block">
                <h2 class="txt-ss-h3 txt-nt-100">Jan Huysmans is a digital designer & artist living in the diamond city
                    of Antwerp.</h2>
                <h4 class="quote-block-text txt-ss-h5 mt-lg">I love building brands, user interfaces or any design
                    oriënted system. I'm a designer who likes to create new experiences, products or websites.</h4>
                <h4 class="quote-block-text txt-ss-h5 mt-md">I strongly believe design is a democratic force of change.
                    Finding solutions to user needs is something I value a lot.</h4>
                <h4 class="quote-block-text txt-ss-h5 mt-md">Sometimes I dabble in art. My artistic work is based on
                    studies of rhythm, color and pattern. Mostly on themes like repetition, modularity and automation.
                </h4>
            </section>  -->

            <!-- BUTTONS  
        --- TIJDELIJK WEGGEHAALD
            <section class="mt-sm">
                    <div class="links-wrapper container-fluid">
                        <div class="downloads-title txt-ss-body">Links</div>
                        <div class="downloads-buttonbar">
                            <a href="#" target="_blank"
                                download="made-logo-package"><button class="downloads-button"><span class="link-arrow">&rarr;</span>Get in touch</button></a>
                            <a href="#"
                                target="_blank"><button class="downloads-button"><span class="link-arrow">&rarr;</span>Read my story</button></a>
                        </div>
                    </div>
            </section> -->

            <!-- INTRO TEXT + CTA BUTTONS -->
            <section class="story-block">
                <div class="story-title-bar ps-md">
                    <h3 class="txt-ss-h3">Jan Huysmans is a digital designer & artist living in the diamond city
                        of Antwerp.</h3>
                </div>
                <div class="story-box mt-md">
                    <div class="story-column-left">
                        <h4 class="quote-block-text txt-ss-h5 mt-lg">I love building brands, user interfaces or any design
                            oriënted system. I'm a designer who likes to create new experiences, products or websites.</h4>
                        <h4 class="quote-block-text txt-ss-h5 mt-md">I strongly believe design is a democratic force of change.
                            Finding solutions to user needs is something I value a lot.</h4>
                        <h4 class="quote-block-text txt-ss-h5 mt-md">Sometimes I dabble in art. My artistic work is based on
                            studies of rhythm, color and pattern. Mostly on themes like repetition, modularity and automation.
                        </h4>
                        <div class="links-wrapper container-fluid no-x-padding">
                        <div class="downloads-buttonbar">
                            <a href="#" target="_blank"
                                download="made-logo-package"><button class="downloads-button"><span class="link-arrow">&rarr;</span>Get in touch</button></a>
                            <a href="#"
                                target="_blank"><button class="downloads-button"><span class="link-arrow">&rarr;</span>Read my story</button></a>
                        </div>
                    </div>
                    </div>
                    <div class="story-column-right mt-xl ms-md">
                        <img class="story-column-right-img--sm mt-xxl img-fluid"
                            src="../assets/portrait.png"
                            alt="The right kind of difficult - Man looking at whiteboard">
                    </div>
                </div>
            </section>
          
            <!-- IMAGE BLOCK  -->
            <section class="story-block container-fluid mt-xl">
                <div class="story-title-bar ps-md">
                    <h3 class="txt-ss-body2">Projects</h3>
                </div>
                <div class="story-box-images mt-lg">
                    <div class="story-images-third">
                        <img class="story-img--sm img-fluid" src="../assets/images/home-green.png"
                            alt="Simon Explaining something">
                    </div>
                    <div class="story-images-full">
                        <img class="story-img--sm img-fluid" src="../assets/images/home-ecover.png"
                            alt="a pen writing on a whiteboard">
                    </div>
                </div>
            </section>

            <!-- QUOTE - Experience -->
            <section class="quote-block">
                <h3 class="quote-block-text txt-ss-h4 text-width-60">Find me for
                </h3>
            </section>

            <!-- ACTIONS LABEL -->
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
            </section> 
            <!-- ACTIONS LABEL -->
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
            </section>
            <!-- ACTIONS LABEL -->
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

            <!-- DIVIDER - SUPPORT TEXT -->
            <section class="container-fluid bg-pp-30 mt-xl">
                <div class="support-block-textwrap">
                    <h6 class="txt-ss-h5">“I got a free student upgrade after I needed  over 500 elements to place on my boards. <br>— Thank you, Whimsical.“</h6>
                    <p class="txt-ss-body1 mt-sm">I use whimsical mostly for making sitemaps and to organise information while brainstorming.</p>
                </div>
            </section> 

            <!-- COPY -->
            <section class="copy-box">
                <div class="copy-column-left">
                    <p class="copy-label">Some text</p>
                </div>
                <div class="copy-column-right">
                    <h3 class="txt-ss-h4 indent-xl">Some more explainer, perhaps for a project page.
                    </h3>
                </div>
            </section> 

             <!-- METRICS Tabs-->
             <section id="metrics" class="metrics-box container-fluid">
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

        <!-- --- FOOTER --- -->
        <FooterComponent />
        </main>
    </div>

</template>

<style lang="scss">

</style>
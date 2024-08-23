<template>
  <div id="pagewrapper">
    <main ref="mainContent" class="maintest pt-lg">
      <div class="about-head">
        <div class="about-bar-top">
          <h4 class="about-title txt-ss-h3">This is my archive. A scrap book of less intricate projects.</h4>
        </div>
        <div class="about-bar-bottom">
          <p class="txt-body-2 txt-gr-50">Want more?</p>
          <router-link class="view-button-box mb-xs" to="/work">
            <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
            <span class="link-text">{{ buttonText }}</span>
          </router-link>


        </div>
      </div>

      <!-- *** PROJECT I - LORIGIN *** -->
      <div class="archive-container bg-white">
        <!-- DIVIDER -->
        <div class="block-divider"></div>
        <!-- TOP -->
        <div class="top-row">
          <h6 class="work-title txt-ss-sub1">Lorigin</h6>
          <h6 class="work-title txt-ss-sub1">2014</h6>
        </div>
        <!-- BLOCKS -->
        <div class="double-box">
          <!-- L block -- info -->
          <div class="box-left">
            <span class="txt-ss-h5 txt-nt-100">Short film about a conflict that arises between two humanoids, when
              confronted with an unknown entity that is destroying their home.</span>
          </div>
          <!-- R block -- image and caption-->
          <div class="box-right">
            <img src="/assets/images/projects/media/lorigin1.jpg" class="image image-fluid" alt="portrait">
            <span class="subtext txt-gr-50">A video still from the short film.</span>
          </div>
        </div>
        <!-- DIVIDER -->
        <div class="divider"></div>
      </div>

      <!-- *** PROJECT II - LIBERTAD *** -->
      <div class="archive-container bg-white">
        <!-- DIVIDER -->
        <div class="block-divider"></div>
        <!-- TOP -->
        <div class="top-row">
          <h6 class="work-title txt-ss-sub1">LIBERTAD</h6>
          <h6 class="work-title txt-ss-sub1">2014</h6>
        </div>
        <!-- BLOCKS -->
        <div class="double-box">
          <!-- L block -- info -->
          <div class="box-left">
            <span class="txt-ss-h5 txt-nt-100">Short documentary reel about Teknival, an underground rave-event in the north of France.</span>
          </div>
          <!-- R block -- image and caption-->
          <div class="box-right">
            <img src="/assets/images/projects/media/libertad1.jpg" class="image image-fluid" alt="portrait">
            <span class="subtext txt-gr-50">A video still from the short film.</span>
          </div>
        </div>
        <!-- DIVIDER -->
        <div class="divider"></div>
      </div>


      <!-- *** PROJECT III - PAPER WORKS *** -->
      <div class="archive-container bg-white">
        <!-- DIVIDER -->
        <div class="block-divider"></div>
        <!-- TOP -->
        <div class="top-row">
          <h6 class="work-title txt-ss-sub1">PAPER WORKS</h6>
          <h6 class="work-title txt-ss-sub1">2016</h6>
        </div>
        <!-- BLOCKS -->
        <div class="double-box">
          <!-- L block -- info -->
          <div class="box-left">
            <span class="txt-ss-h5 txt-nt-100">A series of artwork made out of manipulated sheets of paper.</span>
          </div>
          <!-- R block -- image and caption-->
          <div class="box-right">
            <img src="/assets/images/projects/media/libertad2.jpg" class="image image-fluid" alt="portrait">
            <span class="subtext txt-gr-50">Images of the actual artwork in Brussels Gare de XXXX.</span>
          </div>
        </div>
        <!-- DIVIDER -->
        <div class="divider"></div>
      </div>

      <!-- *** PROJECT IV - PAPER WORKS *** -->
            <div class="archive-container bg-white">
        <!-- DIVIDER -->
        <div class="block-divider"></div>
        <!-- TOP -->
        <div class="top-row">
          <h6 class="work-title txt-ss-sub1">Poetry</h6>
          <h6 class="work-title txt-ss-sub1">2016</h6>
        </div>
        <!-- BLOCKS -->
        <div class="double-box">
          <!-- L block -- info -->
          <div class="box-left">
            <span class="txt-ss-h5 txt-nt-100">Reading big words on a small stage.</span>
          </div>
          <!-- R block -- image and caption-->
          <div class="box-right">
            <img src="/assets/images/projects/media/libertad2.jpg" class="image image-fluid" alt="portrait">
            <span class="subtext txt-gr-50">Images of the actual artwork in Brussels Gare de XXXX.</span>
          </div>
        </div>
        <!-- DIVIDER -->
        <div class="divider"></div>
      </div>

       <!-- *** PROJECT IV - PAPER WORKS *** -->
       <div class="archive-container bg-white">
        <!-- DIVIDER -->
        <div class="block-divider"></div>
        <!-- TOP -->
        <div class="top-row">
          <h6 class="work-title txt-ss-sub1">Poetry</h6>
          <h6 class="work-title txt-ss-sub1">2016</h6>
        </div>
        <!-- BLOCKS -->
        <div class="double-box">
          <!-- L block -- info -->
          <div class="box-left">
            <span class="txt-ss-h5 txt-nt-100">Reading big words on a small stage.</span>
          </div>
          <!-- R block -- image and caption-->
          <div class="box-right">
            <img src="/assets/images/projects/media/libertad2.jpg" class="image image-fluid" alt="portrait">
            <span class="subtext txt-gr-50">Images of the actual artwork in Brussels Gare de XXXX.</span>
          </div>
        </div>
        <!-- DIVIDER -->
        <div class="block-divider"></div>
      </div>

      <MarqueeBar class="mt-lg"/>
      <FooterComponent />
    </main>
  </div>
</template>


<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";

export default {
  data() {
    return {
      buttonText: "See all projects",
    };
  },
  mounted() {

  },
  methods: {

  },
  components: {
    FooterComponent,
    MarqueeBar,
  },
};
</script>

<style scoped>

</style>
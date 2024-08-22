<template>
  <div  id="pagewrapper">
    <main ref="mainContent" class="maintest pt-lg">
      <div class="about-head">
        <div class="about-bar-top">
          <h4 class="txt-ss-h4">This is my personal story. Like every good movie it has some ups and downs.</h4>
        </div>
        <div class="about-bar-bottom">
          <p class="txt-body-2 txt-gr-50">No time to read?</p>
          <router-link
          class="view-button-box mb-xs"
          :to="{ path: '/about', hash: '#bottomSection' }">
          <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
          <span class="link-text">{{ buttonText }}</span>
        </router-link>


        </div>
        <div class="divider"></div>
      </div>

      <!-- *** PART I - 1992 *** -->
      <div class="about-container mt-xl">
        <div class="date-row">
          <span class="date txt-ss-sub1 txt-gr-50">1992</span>
        </div>
        <div class="double-box">
          <!-- Left block with text -->
          <div class="box-left">
            <h6 class="text-lg txt-ss-h3 txt-nt-100">Leuven<br>(BE)</h6>
          </div>
          <!-- Right block with image -->
          <div class="box-right">
            <img src="/assets/images/about/about-baby-me.png" class="image image-fluid" alt="portrait">
            <span class="subtext txt-gr-50">The younger me.</span>
          </div>
        </div>
        <!-- Full-width body text -->
        <div class="text-row">
          <div class="frame">
            <span class="full-text txt-body-2 txt-nt-60">
              This is baby-me. I was born in Leuven in the early nineties. Due to medical complications, chances that I
              wouldn’t make it were fairly high. I traveled between several hospitals before actually being born. As it
              appears, miracles happen.
            </span>
          </div>
        </div>
      </div>

      <!-- *** PART II - 1999 *** -->
      <div class="about-container">
        <div class="date-row">
          <span class="date txt-ss-sub1 txt-gr-50">1999</span>
        </div>
        <div class="double-box">
          <!-- Left block with text -->
          <div class="box-right">
            <img src="/assets/images/about/about-senegal-1.png" class="image image-fluid" alt="portrait">
            <span class="subtext txt-gr-50">The village where I lived.</span>
          </div>
          <!-- Right block with image -->
          <div class="box-right">
            <img src="/assets/images/about/about-senegal-2.png" class="image image-fluid height-full" alt="portrait">
          </div>
        </div>
        <!-- Full-width body text -->
        <div class="text-row">
          <div class="frame">
            <span class="full-text txt-body-2 txt-nt-60">
              In ‘95 my parents got divorced, while their clothing business went bankrupt. My dad was left with a
              mountain of debt, while my mom got to take care of me. Around the millenium she took me and left for
              Senegal.
            </span>
            <span class="full-text txt-body-2 txt-nt-60 mt-sm">
              I have some fond memories of my time in the south. In a personal way I still feel a bit connected to the
              African culture. My dad on the other hand, claims I got kidnapped. Weird story.
            </span>
          </div>
        </div>
      </div>

      <!-- *** PART III - 2004 *** -->
      <div class="about-container">
        <div class="date-row">
          <span class="date txt-ss-sub1 txt-gr-50">2004</span>
        </div>
        <div class="double-box">
          <!-- Left block with text -->
          <div class="box-left align-start">
            <h6 class="full-text txt-ss-body2 txt-nt-60">This was my father’s house in Meerhout, Belgium. I spent part
              of my youth here, when I wasn’t couchsurfing with friends. The house is gone now. My dad built a new one
              in 2017, after busting his ass for decades.</h6>
          </div>
          <!-- Right block with image -->
          <div class="box-right">
            <img src="/assets/images/about/about-house-dad-1.png" class="image image-fluid" alt="portrait">
          </div>
        </div>
        <!-- Full-width body text -->
      </div>

      <!-- *** PART IV - 2008 *** -->
      <div class="about-container">
        <div class="date-row">
          <span class="date txt-ss-sub1 txt-gr-50">2008</span>
        </div>
        <div class="double-box">
          <!-- L block with image -->
          <div class="box-right">
            <img src="/assets/images/about/about-house-mom-1.png" class="image image-fluid" alt="portrait">
          </div>
          <!-- R block with text -->
          <div class="box-left">
            <h6 class="full-text txt-ss-body2 txt-nt-60">This is an impression of my mom’s place. It was a trashy place
              to say the least.</h6>
          </div>
        </div>
        <!-- Full-width body text -->
        <div class="text-row">
          <div class="frame">
            <span class="full-text txt-body-2 txt-pp-80">PERSONAL NOTE</span>
            <span class="full-text txt-ss-h5 txt-nt-60 mt-sm">
              I grew up in relative poverty for a large part of my life.
            </span>
            <span class="full-text txt-body-2 txt-nt-60 mt-sm">
              My mom was a bit of a drunk and she ruined a lot of lives with her irresponsible behaviour. She barely had
              an income or put any food on the table. I had to grow up the hard way and eventually I moved out of the
              house.
            </span>
          </div>
        </div>
      </div>

      <!-- *** PART V - 2012  -- HOMELESS *** -->
      <div class="about-container">
        <div class="date-row">
          <span class="date txt-ss-sub1 txt-gr-50">2012</span>
        </div>
        <div class="double-box">
          <!-- L block with text -->
          <div class="box-left">
            <h6 class="full-text txt-ss-body2 txt-nt-60">In 2012 I studied the audiovisual arts in Genk. Among other
              things I made an intriguing incognito documentary.</h6>
          </div>
          <!-- R block with image -->
          <div class="box-right">
            <img src="/assets/images/about/about-antwerp-1.png" class="image image-fluid" alt="portrait">
          </div>

        </div>
        <!-- Full-width body text -->
        <div class="text-row">
          <div class="frame">
            <span class="full-text txt-ss-h5 txt-nt-60 mt-sm">
              I slept in the streets of Antwerp during the Christmas holidays to experience and document life as a
              homeless person.
            </span>
          </div>
        </div>
      </div>

      <!-- *** PART VII - 2018 -- LIFE HAPPENS *** -->
      <div class="about-container">
        <div class="date-row">
          <span class="date txt-ss-sub1 txt-gr-50">2018</span>
        </div>
        <div class="double-box">
          <!-- L block with image -->
          <div class="box-right wider">
            <img src="/assets/images/about/about-rocky-2.gif" class="image image-fluid square-gif" alt="portrait">
          </div>
          <!-- R block with text -->
          <div class="box-left">
            <h6 class="full-text txt-ss-body2 txt-nt-60">Life happens. I’m not afraid of speaking out my failures. They've given me the chance to grow.</h6>
          </div>
        </div>
        <!-- Full-width body text -->
        <div class="text-row">
          <div class="frame">
            <span class="full-text txt-ss-h5 txt-nt-60 mt-sm">
              In 2014 I went to Ghent to study Film. Later I moved to Brussels to study Fine Arts in the St. Lucas project studio. In 2016 I came to Antwerp to study Industrial Design. <span class="txt-ss-h5">But I became a dropout</span>.
            </span>
            <span class="full-text txt-body-2 txt-nt-60 mt-sm">
              Let’s be frank, I suffered from depression during my college years. I didn’t actually know while going along, but through some valuable councelling I got to grips with my past and found back hope. Thanks Ann.
            </span>
            <span class="full-text txt-body-2 txt-nt-60 mt-sm">
              Obviously I missed some chances. For a while I worked as a salesman / interior advisor. I loved interacting with my cliënts on a personal basis. Together we created some dream interiors, but after a while I had to move on and pursue my dream.
            </span>

          </div>
        </div>
      </div>

           <!-- *** PART VIII - 2021 - ROCKY ON *** -->
           <div class="about-container">
        <div class="date-row">
          <span class="date txt-ss-sub1 txt-gr-50">2021</span>
        </div>

        <div class="double-box mt-sm">
          <!-- L block with image -->
          <div class="box-right wider">
            <img src="/assets/images/about/about-rocky-1.gif" class="image image-fluid" alt="portrait">
            <span class="full-text caption txt-gr-50">
              Getting my Rocky on - Digital Design @ PXL Digital.</span>
          </div>
        </div>
      
        <!-- Full-width body text -->
        <div class="text-row">
          <div class="frame">
            <span class="full-text txt-ss-h5 txt-nt-60 mt-sm">
              This is the part of the story where the protagonist gets going.</span>
              <span class="full-text txt-ss-body2 txt-nt-60 mt-sm">
                Rocky didn’t want to be a bum, and neither do I. After some time in the workforce I picked up the glove again and went to study Digital Design.</span>
          </div>
        </div>     
      </div>

      <div id="bottomSection">.</div>

      <CurriculumComponent />
    
      <MarqueeBar />
      <FooterComponent />
    </main>
  </div>
</template>


<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";
import CurriculumComponent from "@/components/CurriculumComponent.vue";

export default {
  data() {
    return {
      buttonText: "View my Curriculum",
    };
  },
  mounted() {
    if (this.$route.hash) {
      this.scrollToSection(this.$route.hash.substring(1));
    }
  },
  methods: {
    scrollToSection(sectionId) {
      this.$nextTick(() => {
        console.log(`Scrolling to section: ${sectionId}`);
        const section = document.querySelector(`#${sectionId}`);
        if (section) {
          console.log('Section found:', section);
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.log('Section not found');
        }
      });
    }
  },
  components: {
    FooterComponent,
    MarqueeBar,
    CurriculumComponent,
  },
};
</script>

<style scoped>

</style>
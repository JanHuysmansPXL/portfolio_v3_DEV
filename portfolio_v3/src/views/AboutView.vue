<template>
  <div id="pagewrapper">
    <main class="maintest pt-lg">
      <div class="about-head">
        <div class="about-bar-top">
          <h4 class="txt-ss-h4">This is my personal story. Like every good movie it has some ups and downs.</h4>
        </div>
        <div class="about-bar-bottom">
          <p class="txt-body-2 txt-gr-50">No time to read?</p>
          <router-link to="/work" class="view-button-box mb-xs">
            <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
            <span class="link-text">{{ buttonText }}</span>
          </router-link>
        </div>
        <div class="divider"></div>
      </div>

      <!-- *** PART I - 1992 *** -->
      <div class="about-container">
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
              This is baby-me. I was born in Leuven in the early nineties. Due to medical complications, chances that I wouldn’t make it were fairly high. I traveled between several hospitals before actually being born. As it appears, miracles happen.
            </span>
          </div>
        </div>
      </div>


      <!-- *** PART II - 1995 *** -->
      <div class="about-container">
        <div class="date-row">
          <span class="date txt-ss-sub1 txt-gr-50">1995</span>
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
              In ‘95 my parents got divorced, while their clothing business went bankrupt. My dad was left with a mountain of debt, while my mom got to take care of me. Around the millenium she took me and left for Senegal.
            </span>
            <span class="full-text txt-body-2 txt-nt-60 mt-sm">
              I have some fond memories of my time in the south. In a personal way I still feel a bit connected to the African culture. My dad on the other hand, claims I got kidnapped. Weird story. 
            </span>
          </div>
        </div>
      </div>

            <!-- *** PART III - 1999 *** -->
            <div class="about-container">
        <div class="date-row">
          <span class="date txt-ss-sub1 txt-gr-50">1999</span>
        </div>
        <div class="double-box">
          <!-- Left block with text -->
          <div class="box-left">
            <h6 class="full-text txt-ss-body2 txt-nt-60">This was my father’s house in Meerhout, Belgium. I spent part of my youth here, when I wasn’t couchsurfing with friends. The house is gone now. My dad built a new one in 2017, after busting his ass for decades.<br>(BE)</h6>
          </div>
          <!-- Right block with image -->
          <div class="box-right">
            <img src="/assets/images/about/about-house-dad-1.png" class="image image-fluid" alt="portrait">
          </div>
        </div>
        <!-- Full-width body text -->
      </div>


      <MarqueeBar />
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
      buttonText: "View my Curriculum"
    };
  },
  computed: {

  },
  methods: {
  },
  components: {
    FooterComponent,
    MarqueeBar,
  },
};
</script>

<style lang="scss">
.about-container {
  width: 100%;
  padding: 1rem;
  
  .date-row {
    width: 100%;
    text-align: left;
    margin-bottom: 8px;

    .date {
      font-size: 1.5rem;
      color: #6e8383;
      font-family: 'Degular Display', sans-serif;
    }
  }

  /* Two symmetrical blocks (side by side) */
  .double-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 16px; /* Space between the two blocks */

    .box-left, .box-right {
      width: 48%;  /* Both blocks take up 48% of the container's width */
    }

    .box-left {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;

      .text-lg {
        font-size: 1.75rem;
        font-weight: bold;
        color: #212323;
      }
    }

    .box-right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .image {
        min-width: 100%;
        max-width: 100%;
        height: auto;
        max-height: 400px;
        border-radius: 1px;
        align-self: flex-end;
        object-fit: cover;
        &.height-full {
          height: 100%;
        }
        &.height-third {
          height: 66%;
        }
        &.height-half {
          height: 50%;
        }
      }
      .subtext {
        margin-top: 4px;
        font-size: 0.875rem;
        color: #6e8383;
      }
    }
  }

  /* Full-width body text */
  .text-row {
    width: 100%;
    margin-top: 2rem;
    .frame {
      background: none;
      .full-text {
        display: block;
      }
    }
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .double-box {
    .box-left, .box-right {
      width: 48%;  /* Keep symmetrical blocks on smaller screens */
    }
  }
}

@media (max-width: 480px) {
  .double-box {
    .box-left, .box-right {
      width: 48%;  /* Maintain the 50-50 split even on mobile */
    }
  }
}
</style>

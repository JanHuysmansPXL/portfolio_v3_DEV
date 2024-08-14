<template>
  <div id="pagewrapper">
    <main class="maintest pt-lg">
      <section class="mt-md">
        <div class="projects-grid-gallery mt-sm">
          <router-link to="/" class="projects-grid-card" v-for="(project, index) in projects" :key="index">
            <img :src="project.image" class="projects-grid-card-img" :alt="project.title" />
            <div class="projects-grid-labelrow">
              <p class="projects-grid-title">{{ project.title }}</p>
              <p class="projects-grid-subtitle txt-ss-body1 txt-nt-100 mt-xs txt-width-90">{{ project.description }}</p>
            </div>
          </router-link>
        </div>
      </section>

      <div class="next-project-bar mt-lg">
        <router-link to="/" class="next-project-link">
            <span class="arrow-box"><img class="link-arrow" src="/assets/arrow-right-purple.png" /></span>Suggestion
          </router-link>
      </div>



      <MarqueeBar/>
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
      projects: [
        {
          title: "Made Digital Brand Book",
          image: '/assets/images/covers/coverimage.png',
          icon: null,
          description: "How I defined, designed and delivered an interactive online brand guide for the new Made brand identity.",
        },
        {
          title: "Kronolith",
          image: '/assets/images/covers/coverimage-1.png',
          icon: '/assets/images/square-dont.png',
          description: "Design and 3D-animation of a wall-mounted clock.",
        },
        {
          title: "Buildr",
          image: '/assets/images/covers/coverimage-2.png',
          icon: null,
          description: "Guiding a group of young designers to design and develop an accessible job matching platform.",
        },
        {
          title: "Auro",
          image: '/assets/images/covers/coverimage-3.png',
          icon: null,
          description: "Webdesign and development for an imaginative wearables brand, powered by Midjourney.",
        },
        {
          title: "Tiny House",
          image: '/assets/images/covers/coverimage-4.png',
          icon: '/assets/images/square-dont.png',
          description: "Inspiring people to live smaller trough joyful branding.",
        },
        {
          title: "Holy Cow!",
          image: '/assets/images/covers/coverimage-5.png',
          icon: null,
          description: "How I designed an offbeat burger chain brand and app.",
        },
        {
          title: "Transit",
          image: '/assets/images/covers/coverimage-6.png',
          icon: null,
          description: "3D-sculptures for Transit, a techno/house-event with headliners like Mall Grab.",
        },
        {
          title: "Onyx",
          image: '/assets/images/covers/coverimage-7.png',
          icon: '/assets/images/square-dont.png',
          description: "A handmade font that rocks.",
        },
        {
          title: "Collider",
          image: '/assets/images/covers/coverimage-8.png',
          icon: null,
          description: "A collection of handmade drawings and Axidraw prints.",
        },
        {
          title: "Line Drawings",
          image: '/assets/images/covers/coverimage-9.png',
          icon: null,
          description: "A collection of intricate ballpoint drawings and colour studies.",
        },
        // Add more projects as needed...
      ],
    };
  },
  components: {
    FooterComponent,
    MarqueeBar,
  },
};
</script>

<style lang="scss">
.next-project-bar {
  display: flex;
  width: 100%;
  padding: 2rem 2rem;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid #212323;
  border-bottom: 0px solid #212323;
  background:  #C1C1E5;
  .next-project-link {
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: #663DF9;
    font-feature-settings: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on;
    font-family: "Degular Variable";
    font-size: 8rem;
    font-style: normal;
    font-weight: 650;
    line-height: 85%; /* 6.8rem */
    letter-spacing: -0.08rem;
   /* @include mediaquery(tablet) {
      font-size: 3rem;
      align-items: flex-end;
    } */
    &:hover > span .link-arrow {
      margin-right: 24px;
    }
    .arrow-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    .link-arrow {
      max-height: 80px;
      width: auto;
      margin-right: 16px;
      transition-property: margin;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
    /*  @include mediaquery(tablet) {
          max-height: 32px;
          width: auto;
          margin-right: 16px;
          transition-property: margin;
          transition-duration: 0.2s;
          transition-timing-function: ease-in-out;
        } */
    }}
  }
}

</style>
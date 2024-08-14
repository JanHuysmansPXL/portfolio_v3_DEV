
<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";


export default {
  data() {
    return {
      projects: [
        {
          title: "Made Digital Brand Book",
          image: require('@/assets/images/covers/coverimage.png'),
          icon: null,
          description: "How I defined, designed and delivered an interactive online brand guide for the new Made brand identity.",
        },
        {
        title: "Kronolith",
        image: require('@/assets/images/covers/coverimage-1.png'),          
        icon: "../src/assets/images/square-dont.png",
        description: "Design and 3D-animation of a wall-mounted clock.",
        },
        {
          title: "Buildr",
          image: "../src/assets/images/covers/coverimage-2.png",
          icon: null,
          description: "Guiding a group of young designers to design and develop an accesible job matching platform.",
        },
        {
          title: "Auro",
          image: "../src/assets/images/covers/coverimage-3.png",
          icon: null,
          description: "Webdesign and development for an imaginative wearables brand, powered by Midjourney.",
        },
        {
          title: "Tiny House",
          image: "../src/assets/images/covers/coverimage-4.png",
          icon: null,
          description: "Branding a joyful brand for a compact lifestyle.",
        },
        {
          title: "Holy Cow!",
          image: "../src/assets/images/covers/coverimage-5.png",
          icon: null,
          description: "How I designed an offbeat burger chain brand and app.",
        },
        {
          title: "Transit",
          image: "../src/assets/images/covers/coverimage-6.png",
          icon: null,
          description: "3D-sculptures for Transit, a techno/house-event with headliners like Mall Grab.",
        },
        {
          title: "Onyx",
          image: "../src/assets/images/covers/coverimage-7.png",
          icon: null,
          description: "A handmade font that rocks.",
        },
        {
          title: "Collider",
          image: "../src/assets/images/covers/coverimage-8.png",
          icon: null,
          description: "A collection of handmade drawings and Axidraw prints.",
        },
        {
          title: "Line Drawings",
          image: "../src/assets/images/covers/coverimage-9.png",
          icon: null,
          description: "A collection of intricate ballpoint drawings and colour studies.",
        },
        // Add more projects as needed...
      ],
    };
  },
  components: {
    FooterComponent,
    NavbarComponent,
  },
};
</script>

<template>
  <div id="pagewrapper">
    <!-- NAVBAR WITH MENU -->
    <NavbarComponent />

    <!-- MAIN BODY -->
    <main class="maintest pt-lg">
      <section class="mt-md">


        <div class="projects-head ms-md">
            <div class="projects-bar-top">
                <h4 class="txt-ss-h3 txt-width-60">Projects</h4>
            </div>
            <div class="projects-bar-bottom">
                <ul class="projects-filter-list">
                    <li><a href="#" class="txt-ss-sub2 filter-link">All</a></li>
                    <li><a href="#" class="txt-ss-sub2  filter-link">Digital</a></li>
                    <li><a href="#" class="txt-ss-sub2  filter-link">Branding</a></li>
                    <li><a href="#" class="txt-ss-sub2  filter-link">Art</a></li>
                </ul>
                <button class="view-button-box">
                    <img class="link-arrow" src="../assets/arrow-right-link.png" alt="arrow">
                    <a class="link-text" href="#">View List</a>
                </button>
            </div>
            <div class="divider"></div>
         
        </div>


        <!-- GRID SECTION - PROJECTS GALLERY -->
        <div class="projects-grid-gallery mt-sm">
          <router-link to="/" class="projects-grid-card" v-for="(project, index) in projects" :key="index">
            <img :src="project.image" class="projects-grid-card-img" :alt="project.title" />
            <div class="projects-grid-labelrow">
             <!-- <img v-if="project.icon" :src="project.icon" class="projects-grid-labelicon label-divider" /> -->
              <p class="projects-grid-title">{{ project.title }}</p>
            <p class="projects-grid-subtitle txt-ss-body1 txt-nt-100 mt-xs txt-width-90">{{ project.description }}</p>
            </div>
          </router-link>
        </div>

      </section>

      <!-- FOOTER -->
      <FooterComponent />
    </main>
  </div>
</template>

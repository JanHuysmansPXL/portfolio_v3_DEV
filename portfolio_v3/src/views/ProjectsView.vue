<template>
  <div id="pagewrapper">
    <NavbarComponent />

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

      <FooterComponent />
    </main>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

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
          title: "Made Digital Brand Book",
          image: '/assets/images/covers/coverimage-3.png',
          icon: null,
          description: "How I defined, designed and delivered an interactive online brand guide for the new Made brand identity.",
        },
        {
          title: "Kronolith",
          image: '/assets/images/covers/coverimage-4.png',
          icon: '/assets/images/square-dont.png',
          description: "Design and 3D-animation of a wall-mounted clock.",
        },
        {
          title: "Buildr",
          image: '/assets/images/covers/coverimage-5.png',
          icon: null,
          description: "Guiding a group of young designers to design and develop an accessible job matching platform.",
        },
        {
          title: "Made Digital Brand Book",
          image: '/assets/images/covers/coverimage-6.png',
          icon: null,
          description: "How I defined, designed and delivered an interactive online brand guide for the new Made brand identity.",
        },
        {
          title: "Kronolith",
          image: '/assets/images/covers/coverimage-7.png',
          icon: '/assets/images/square-dont.png',
          description: "Design and 3D-animation of a wall-mounted clock.",
        },
        {
          title: "Buildr",
          image: '/assets/images/covers/coverimage-8.png',
          icon: null,
          description: "Guiding a group of young designers to design and develop an accessible job matching platform.",
        },
        {
          title: "Buildr",
          image: '/assets/images/covers/coverimage-9.png',
          icon: null,
          description: "Guiding a group of young designers to design and develop an accessible job matching platform.",
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

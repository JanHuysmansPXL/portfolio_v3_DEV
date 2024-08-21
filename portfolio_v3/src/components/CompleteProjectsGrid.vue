<template>
      <section class="mt-md">
        <div class="projects-grid-gallery mt-sm">
          <router-link
            v-for="(project, index) in projects"
            :key="index"
            :to="project.link"
            class="projects-grid-card"
          >
            <img
              :src="project.image"
              class="projects-grid-card-img"
              :alt="project.title"
            />
            <div class="projects-grid-labelrow">
              <p class="projects-grid-title">{{ project.title }}</p>
              <p class="projects-grid-subtitle txt-ss-body1 txt-nt-100 mt-xs txt-width-90">
                {{ project.description }}
              </p>
            </div>
          </router-link>
        </div>
      </section>
</template>

<script>

export default {
  data() {
    return {
      projects: [
        {
          title: "Made Digital Brand Book",
          image: '/assets/images/covers/coverimage.png',
          link: "/made-digital-brand-book",
          description: "How I defined, designed and delivered an interactive online brand guide for the new Made brand identity.",
        },
        {
          title: "Kronolith",
          image: '/assets/images/covers/coverimage-1.png',
          link: "/kronolith",
          description: "Design and 3D-animation of a wall-mounted clock.",
        },
        {
          title: "Buildr",
          image: '/assets/images/covers/coverimage-2.png',
          link: "/buildr",
          description: "Guiding a group of young designers to design and develop an accessible job matching platform.",
        },
        {
          title: "Auro",
          image: '/assets/images/covers/coverimage-3.png',
          link: "/auro",
          description: "Webdesign and development for an imaginative wearables brand, powered by Midjourney.",
        },
        {
          title: "Tiny House",
          image: '/assets/images/covers/coverimage-4.png',
          link: "/tinyhouse",
          description: "Inspiring people to live smaller trough joyful branding.",
        },
        {
          title: "Holy Cow!",
          image: '/assets/images/covers/coverimage-5.png',
          link: "/holycow",
          description: "How I designed an offbeat burger chain brand and app.",
        },
        {
          title: "Transit",
          image: '/assets/images/covers/coverimage-6.png',
          link: "/transit",
          description: "3D-sculptures for Transit, a techno/house-event with headliners like Mall Grab.",
        },
        {
          title: "Onyx",
          image: '/assets/images/covers/coverimage-7.png',
          link: "/onyx",
          description: "A handmade font that rocks.",
        },
        {
          title: "Collider",
          image: '/assets/images/covers/coverimage-8.png',
          link: "/collider",
          description: "A collection of handmade drawings and Axidraw prints.",
        },
        {
          title: "Line Drawings",
          image: '/assets/images/covers/coverimage-9.png',
          link: "/lines",
          description: "A collection of intricate ballpoint drawings and colour studies.",
        },
        // Add more projects as needed...
      ],
    };
  },
  components: {

  },
};
</script>

<style lang="scss">
/* Add your styles here */
</style>

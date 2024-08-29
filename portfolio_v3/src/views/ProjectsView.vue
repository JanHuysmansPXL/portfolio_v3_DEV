<template>
  <div id="pagewrapper">
    <main class="maintest pt-lg">
      <div class="projects-head ms-md">
        <div class="projects-bar-top">
          <h4 class="txt-ss-h3 txt-width-60">Projects</h4>
        </div>
        <div class="projects-bar-bottom">
          <ul class="projects-filter-list">
            <li><a href="#" class="txt-ss-sub2 filter-link">Digital</a></li>
            <li><a href="#" class="txt-ss-sub2 filter-link">Branding</a></li>
            <li><a href="#" class="txt-ss-sub2 filter-link">Art</a></li>
          </ul>
          <button @click="toggleView" class="view-button-box">
            <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
            <a class="link-text" href="#">{{ viewModeText }}</a>
          </button>
        </div>
        <div class="divider"></div>
      </div>

      <!-- Transition wrapper -->
      <transition name="view-transition" mode="out-in">
        <!-- Conditionally render the grid or list -->
        <component :is="currentView" />
      </transition>

      <div class="suggestion-bar mt-lg">
        <router-link to="/made-digital-brand-book" class="suggestion-link">
          <span class="arrow-box">
            <img class="link-arrow" src="/assets/arrow-right-purple.png" />
          </span>
          Suggestion
        </router-link>
      </div>

      <MarqueeBar />
      <FooterComponent />
    </main>
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import MarqueeBar from "@/components/MarqueeBar.vue";
import CompleteProjectsList from "@/components/CompleteProjectsList.vue";
import CompleteProjectsGrid from "@/components/CompleteProjectsGrid.vue";

export default {
  data() {
    return {
      isGridView: true, // Track if the current view is grid
    };
  },
  computed: {
    currentView() {
      return this.isGridView ? 'CompleteProjectsGrid' : 'CompleteProjectsList';
    },
    viewModeText() {
      return this.isGridView ? 'View List' : 'View Grid';
    }
  },
  methods: {
    toggleView() {
      this.isGridView = !this.isGridView;
    }
  },
  components: {
    FooterComponent,
    MarqueeBar,
    CompleteProjectsList,
    CompleteProjectsGrid,
  },
};
</script>

<style lang="scss">
.view-transition-enter-active, .view-transition-leave-active {
  transition: opacity 0.4s cubic-bezier(0.56,0.25,0.33,0.75) , transform 0.4s cubic-bezier(0.56,0.25,0.33,0.75);
}
.view-transition-enter, .view-transition-leave-to /* .view-transition-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(+32px);
}

.view-button-box a {
  text-decoration: none;
  color: inherit;
}

/* Add further styles for your button and components */
</style>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "MADE DIGITAL BRAND BOOK",
          year: 2024,
          details: "BRANDING / UI / UX / MOTION",
          image: "/assets/images/covers/coverimage.png", // path to your image
          link: "/made-digital-brand-book",
        },
        {
          title: "TINY HOUSE",
          year: 2023,
          details: "BRANDING / SOCIAL CONTENT",
          image: "/assets/images/covers/coverimage-4.png",
          link: "/tinyhouse",
        },
        {
          title: "BUILDR",
          year: 2023,
          details: "Branding / INTERFACE / UX",
          image: "/assets/images/covers/coverimage-2.png", // path to your image
          link: "/buildr",
        },
        {
          title: "KRONOLITH",
          year: 2024,
          details: "INTERFACE / Product Design / 3D Animation",
          image: "/assets/images/covers/coverimage-1.png",
          link: "/kronolith",
        },
        {
          title: "TRANSIT",
          year: 2020,
          details: "ART / SCULPTURE / INDUSTRIAL DESIGN",
          image: "/assets/images/projects/transit/transit-loop-animation-sm.gif",
          link: "/transit",
        },
        // Add more projects as needed
      ],
      hoveredImage: null,
      imageStyles: {
        top: '0px',
        left: '0px',
      },
    };
  },
  methods: {
    showImage(image, event) {
      this.hoveredImage = image;
      this.updateImagePosition(event);
    },
    hideImage() {
      this.hoveredImage = null;
    },
    moveImage(event) {
      this.updateImagePosition(event);
    },
    updateImagePosition(event) {
      const offset = 20; // Offset the image from the mouse pointer
      this.imageStyles = {
        top: `${event.clientY + offset}px`,
        left: `${event.clientX + offset}px`,
      };
    },
  },
};
</script>


<template>
  <div class="work-list">
    <router-link
      v-for="(item, index) in projects"
      :key="index"
      :to="item.link"
      class="row"
      @mouseenter="showImage(item.image, $event)"
      @mouseleave="hideImage"
      @mousemove="moveImage($event)"
    >
      <div class="row-content">
        <div class="top-row"><span class="year txt-ss-sub2">{{ item.year }}</span></div>
        <div class="middle-row"><span class="title">{{ item.title }}</span></div>
        <div class="bottom-row"><span class="details txt-ss-sub2">{{ item.details }}</span></div>
      </div>
    </router-link>

    <!-- Image container that appears on hover -->
    <transition name="image-fade">
      <div v-if="hoveredImage" :style="imageStyles" class="hover-image">
        <img :src="hoveredImage" alt="Project image" />
      </div>
    </transition>
  </div>
</template>



<style scoped lang="scss">
.work-list {
  .row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    
    padding: 1rem;
    border-bottom: 1px solid #DAE3E3;
    border-top: 1px solid #DAE3E3;
    border-collapse: collapse;
    gap: 12px;

    text-decoration: none;
    color: inherit; // Ensure it inherits the text color

    position: relative;
    cursor: pointer;
    transition: background-color 0.7s ease-in-out;

    &:first-of-type {
      border-top: 1px solid #DAE3E3;
    }

    &:last-of-type {
      border-bottom: 1px solid #DAE3E3;
    }

    &:hover {
      background-color: #C1C1E5; // Light purple on hover
      border-color: #212323;
    }

    // Remove default link styling for router-link
    .row-content {
      display: flex;
      padding: 0px 32px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 4px;
      align-self: stretch;
      text-decoration: none;
      color: inherit; // Ensure it inherits the text color
      .top-row {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        .year {
          margin-left: auto;
          text-align: end;
          text-decoration: none;
          color: inherit; // Ensure it inherits the text color
        }
      }

      .middle-row {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        .title {
          font-feature-settings: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on;
          font-family: "Degular Display", Arial, Helvetica, sans-serif;
          font-size: 4rem;
          font-style: normal;
          font-weight: 500;
          line-height: 95%; /* 3.8rem */
          text-transform: uppercase;
          text-decoration: none;
          color: inherit; // Ensure it inherits the text color
        }
      }

      .bottom-row {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        .details {
          text-align: end;
          text-decoration: none;
          color: inherit; // Ensure it inherits the text color
        }
      }
    }
  }

  .hover-image {
    position: absolute;
    z-index: 1000;
    pointer-events: none; // Ensure the image does not interfere with hover detection
    img {
      width: 360px;
      height: auto;
      border-radius: 1px;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, opacity 0.3s ease; // Add transition for smooth scaling and fading
    }
  }

  /* Enter and leave transitions */
  .image-fade-enter-active, .image-fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease; // Apply the duration for enter and leave
  }
  .image-fade-enter, .image-fade-leave-to {
    opacity: 0;
    transform: scale(0.90); // Image will slightly shrink and fade out when disappearing
  }
}
</style>

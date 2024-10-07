<template>
  <Vue3Marquee class="marquee-bar"
  :pauseOnHover="true"
  :loop="0">
    <span class="marquee-word" v-for="(word, index) in textArray" :key="index">
      {{ word }}
    </span>
  </Vue3Marquee>
</template>

<script>
export default {
  data() {
    return {
      // Define the array of words
    textArray: [
      "UI", "/",
      "UX", "/",
      "Brand identity", "/",
      "Strategy", "/",
      "Digital Design", "/",
      "Motion", "/",
      "Graphic Design", "/",
      "Web", "/",
      "UI", "/",
      "UX", "/",
      "Brand identity", "/",
      "Strategy", "/",
      "Digital Design", "/",
      "Motion", "/",
      "Graphic Design", "/",
      "Web", "/",
      "UI", "/",
      "UX", "/",
      "Brand identity", "/",
      "Strategy", "/",
      "Digital Design", "/",
      "Motion", "/",
      "Graphic Design", "/",
      "Web", "/",
    ],
    };
  },
  // Remove the import and component registration
};
</script>

<style lang="scss">
.marquee-bar {
  display: flex;
  flex-direction: row;
  overflow: hidden; /* Hide overflow to prevent text from showing outside the container */
  white-space: nowrap; /* Ensure text doesn’t wrap */
  width: 100%; /* Adjust to fit the container */
  padding: .4rem 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  box-sizing: border-box; /* Include padding and border in the element’s total width and height */
  &:has(.marquee-word:hover) {
  /*you may replace this with an explicit className, e.g. :has(.child1)*/
  background-color: #F3F5F5;
}
}
.marquee-word {
  display: inline-block; /* Ensure each word is treated as a block */
  font-family: 'degular-display', Arial, Helvetica, sans-serif;
  font-size: 1.414rem;
  font-style: normal;
  font-weight: 300;
  line-height: O; /* Adjust as needed */
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  margin-right: 24px; /* Margin between text items */
  pointer-events: auto;
  &:hover {
    color: #B6C6C6;
  }
}

</style>

.child {
  
}

/*this is the new approach*/
.parent:has(.child:nth-of-type(1):hover) {
  /*you may replace this with an explicit className, e.g. :has(.child1)*/
  background: yellow;
}

.parent:has(.child:nth-of-type(2):hover) {
  background: red;
}
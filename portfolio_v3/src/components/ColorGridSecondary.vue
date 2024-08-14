<template>
  <div class="color-grid">
    <div
      v-for="color in colors"
      :key="color.name"
      :class="['color-container', color.class]"
      :style="{ backgroundColor: color.hex, color: getTextColor(color.rgb) }"
      @click="copyToClipboard(color.hex)"
      @mouseover="showTooltip($event, 'Click to copy hex value')"
      @mouseout="hideTooltip"
    >
      <div class="color-info">
        <h2>{{ color.name }}</h2>
        <p>{{ color.hex }}</p>
        <div class="color-values">
          <div>R{{ color.rgb.r }} G{{ color.rgb.g }} B{{ color.rgb.b }}</div>
          <div>C{{ color.cmyk.c }} M{{ color.cmyk.m }} Y{{ color.cmyk.y }} K{{ color.cmyk.k }}</div>
        </div>
      </div>
    </div>
    <div v-if="tooltip.show" :style="tooltip.style" class="tooltip">{{ tooltip.text }}</div>
  </div>
</template>

<script>
export default {
  name: 'ColorGrid',
  data() {
    return {
      colors: [
        { name: 'Green - 50', hex: '#0CA352', rgb: { r: 12, g: 163, b: 82 }, cmyk: { c: 93, m: 0, y: 50, k: 36 }, class: 'green-50' },
        { name: 'Green - 80', hex: '#215C59', rgb: { r: 33, g: 92, b: 89 }, cmyk: { c: 64, m: 0, y: 39, k: 64 }, class: 'green-80' },
        { name: 'Blue - 50', hex: '#33C7C7', rgb: { r: 51, g: 199, b: 199 }, cmyk: { c: 74, m: 0, y: 0, k: 22 }, class: 'blue-50' },
        { name: 'Blue - 80', hex: '#15A0A0', rgb: { r: 21, g: 160, b: 160 }, cmyk: { c: 87, m: 0, y: 0, k: 37 }, class: 'blue-80' },
        { name: 'Red - 50', hex: '#F56F0E', rgb: { r: 245, g: 111, b: 14 }, cmyk: { c: 0, m: 55, y: 94, k: 4 }, class: 'red-50' },
        { name: 'Red - 80', hex: '#B86122', rgb: { r: 184, g: 97, b: 34 }, cmyk: { c: 0, m: 47, y: 82, k: 28 }, class: 'red-80' },
        { name: 'Yellow - 50', hex: '#DDC007', rgb: { r: 221, g: 192, b: 7 }, cmyk: { c: 0, m: 13, y: 97, k: 13 }, class: 'yellow-50' },
        { name: 'Yellow - 80', hex: '#B79F07', rgb: { r: 183, g: 159, b: 7 }, cmyk: { c: 0, m: 13, y: 96, k: 28 }, class: 'yellow-80' },
      ],
      tooltip: {
        show: false,
        text: '',
        style: {}
      }
    };
  },
  methods: {
    copyToClipboard(hex) {
      const el = document.createElement('textarea');
      el.value = hex;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.showTooltip(event, 'Hex code copied!');
    },
    showTooltip(event, text) {
      this.tooltip.text = text;
      this.tooltip.style = {
        top: `${event.clientY + 10}px`,
        left: `${event.clientX + 10}px`,
      };
      this.tooltip.show = true;
    },
    hideTooltip() {
      this.tooltip.show = false;
    },
    calculateBrightness({ r, g, b }) {
      return (r * 299 + g * 587 + b * 114) / 1000;
    },
    getTextColor(rgb) {
      const brightness = this.calculateBrightness(rgb);
      return brightness > 120 ? '#212323' : '#F3F3F5'; // neutral
    }
  }
};
</script>

<style lang="scss">
</style>

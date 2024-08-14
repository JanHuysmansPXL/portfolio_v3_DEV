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
          { name: 'Neutral - 0', hex: '#FFFFFF', rgb: { r: 255, g: 255, b: 255 }, cmyk: { c: 0, m: 0, y: 0, k: 0 }, class: 'neutral-0' },
          { name: 'Neutral - 10', hex: '#F3F3F5', rgb: { r: 243, g: 243, b: 245 }, cmyk: { c: 0, m: 0, y: 0, k: 5 }, class: 'neutral-10' },
          { name: 'Neutral - 15', hex: '#DAE3E3', rgb: { r: 218, g: 227, b: 227 }, cmyk: { c: 0, m: 5, y: 5, k: 0 }, class: 'neutral-15' },
          { name: 'Neutral - 60', hex: '#4A4F4F', rgb: { r: 74, g: 79, b: 79 }, cmyk: { c: 0, m: 5, y: 0, k: 70 }, class: 'neutral-60' },
          { name: 'Neutral - 100', hex: '#212323', rgb: { r: 35, g: 35, b: 35 }, cmyk: { c: 0, m: 0, y: 0, k: 100 }, class: 'neutral-100' },
          { name: 'Green - 30', hex: '#B6C6C6', rgb: { r: 182, g: 198, b: 198 }, cmyk: { c: 8, m: 0, y: 0, k: 22 }, class: 'green-30' },
          { name: 'Green - 50', hex: '#6F8484', rgb: { r: 111, g: 132, b: 132 }, cmyk: { c: 16, m: 0, y: 0, k: 48 }, class: 'green-50' },
          { name: 'Green - 75', hex: '#243F3F', rgb: { r: 36, g: 63, b: 63 }, cmyk: { c: 43, m: 0, y: 0, k: 75 }, class: 'green-75' },
          { name: 'Green - 80', hex: '#243838', rgb: { r: 36, g: 56, b: 56 }, cmyk: { c: 36, m: 0, y: 0, k: 78 }, class: 'green-80' },
          { name: 'Purple - 30', hex: '#C1C1E5', rgb: { r: 193, g: 193, b: 229 }, cmyk: { c: 16, m: 16, y: 0, k: 10 }, class: 'purple-30' },
          { name: 'Purple - 50', hex: '#7777AA', rgb: { r: 119, g: 119, b: 170 }, cmyk: { c: 30, m: 30, y: 0, k: 33 }, class: 'purple-50' },
          { name: 'Purple - 75', hex: '#7137F6', rgb: { r: 113, g: 55, b: 246 }, cmyk: { c: 54, m: 78, y: 0, k: 4 }, class: 'purple-75' },
          { name: 'Purple - 80', hex: '#6224F3', rgb: { r: 98, g: 36, b: 243 }, cmyk: { c: 60, m: 85, y: 0, k: 5 }, class: 'purple-80' },
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
        return brightness > 120 ? '#212323' : '#F3F3F5'; // neutral-100 for light backgrounds, neutral-10 for dark backgrounds
      }
    }
  };
  </script>
  
  <style lang="scss">
  

  </style>
  
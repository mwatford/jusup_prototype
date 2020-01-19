<template>
  <svg
    :style="iconStyle"
    :fill="iconColor"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
  >
    <!-- <g class="asd"> -->
    <component :is="iconType" class="asd"></component>
    <!-- </g> -->
  </svg>
</template>

<script>
import icons from "./icons/icons.js";
export default {
  components: {
    ...icons
  },
  props: {
    iconType: {
      type: String
    },
    iconColor: {
      type: String,
      default: "currentColor"
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    }
  },
  computed: {
    iconStyle() {
      const { width, height } = this;
      return {
        width: `${width}px`,
        height: `${height}px`
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.asd {
  transition: all 0.3s ease;
}
</style>

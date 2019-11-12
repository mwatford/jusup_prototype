<template>
  <div class="alerts col">
    <alert v-for="(alert, index) in alerts" :key="index" :alert="alert"></alert>
  </div>
</template>

<script>
import alert from "./alert.vue";
import alerts from "../scripts/alerts.js";

export default {
  components: {
    alert
  },
  data() {
    return { alerts };
  }
};
</script>

<style lang="scss" scoped>
.alerts {
  align-items: center;
  width: 100%;
  position: relative;
}
</style>
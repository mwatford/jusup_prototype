<template>
  <div class="alerts col">
    <alert
      v-for="(alert, index) in alerts"
      :key="index"
      :index="index"
      :alert="alert"
    ></alert>
  </div>
</template>

<script>
import alert from "./alert.vue";
import { mapState } from "vuex";

export default {
  components: {
    alert
  },
  computed: {
    ...mapState({
      alerts: state => state.alerts
    })
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.alerts {
  align-items: start;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-auto-rows: 350px;
  place-items: center;
  padding: 15px 0;
  justify-content: space-evenly;
}
</style>

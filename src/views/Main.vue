<template>
  <div class="main" ref="main">
    <!-- <div class="options row" v-if="options">
      <div class="col">
        <button
          v-for="(view, index) in Object.keys(views)"
          :key="index"
          @click="changeView(view)"
        >
          {{ view }}
        </button>
      </div>
      <div class="col">
        <router-link to="/add-group">
          <button>Add Group</button>
        </router-link>
      </div>
    </div> -->
    <component :is="component"></component>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BasicView from "./BasicView.vue";
import SlimView from "./SlimView.vue";

export default {
  data() {
    return {
      // options: false,
      views: {
        BasicView,
        SlimView
      }
    };
  },
  computed: {
    ...mapState({
      currentView: state => state.app.view
    }),
    component() {
      return this.views[this.currentView];
    }
  },
  methods: {
    // toggleOptions() {
    //   this.options = !this.options;
    // },
    changeView(view) {
      this.$store.commit("APP_VIEW", view);
    }
  },
  // mounted() {
  //   window.addEventListener("keydown", ({ keyCode }) => {
  //     if (keyCode === 38) {
  //       this.toggleOptions();
  //     }
  //     if (keyCode === 40) {
        
  //     }
  //   });
  // }
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
}
.options {
  position: absolute;
  width: 60%;
  min-height: 30px;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.55);
  border-radius: 8px;
  margin-top: 15px;
  z-index: 3;
  padding-top: 10px;
  box-shadow: 0 0 10px #000;

  & button {
    cursor: pointer;
    width: fit-content;
    margin-left: 10px;
    margin-bottom: 10px;
    height: 25px;
    border: none;
    border-radius: 3px;
    padding: 0 3px;
    background: transparent;
    color: #fff;
    font-weight: bold;

    &:hover {
      background: #fff;
      opacity: 0.6;
      color: #000;
    }
  }
}
</style>

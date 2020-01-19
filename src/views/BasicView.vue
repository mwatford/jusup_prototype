<template>
  <div :class="['basic', 'row']">
    <div class="sidePanel col" v-if="sidePanelOpen">
      <Controls
        :active="{ tab: currentTab.name, view: currentView.name }"
      ></Controls>
      <keep-alive>
        <component :is="currentTab.component" class="display" />
      </keep-alive>
    </div>
    <div class="sidePanel--hidden" v-else>
      <img src="/assets/images/icons/caret.svg" @click="sidePanel = true" />
    </div>
    <component
      v-if="!mobile"
      :is="currentView.component"
      class="display"
    ></component>
  </div>
</template>

<script>
import Controls from "../components/controls.vue";
import { mapState } from "vuex";
import ViewController from "../services/ViewController.js";

export default {
  components: {
    Controls
  },
  data() {
    return {
      sidePanel: true,
      currentTab: this.$store.state.tabs[0],
      currentView: this.$store.state.tabs[3]
    };
  },
  computed: {
    ...mapState({
      mobile: state => state.app.mobile
    }),
    sidePanelOpen() {
      return this.mobile ? true : this.sidePanel;
    }
  },
  methods: {
    togglePanel(val) {
      this.sidePanel = val;
    }
  },
  mounted() {
    eventBus.$on("tab-changed", name => {
      this.currentTab = this.$store.state.tabs.find(el => el.name === name);
    });
    eventBus.$on("view-changed", name => {
      this.currentView = this.$store.state.tabs.find(el => el.name === name);
    });
    eventBus.$on("set-tab", () => {
      this.currentTab = this.$store.state.tabs[0];
      this.currentView = this.$store.state.tabs[3];
    });
    eventBus.$on("toggle-panel", val => {
      this.togglePanel(val);
    });
  }
};
</script>

<style lang="scss" scoped>
.basic {
  width: 100%;
  height: 100%;
}

.sidePanel {
  @media (max-width: 900px) {
    max-width: 900px;
  }
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 420px;
  width: 100%;
  justify-self: flex-start;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  // min-height: 100vh;
  height: 100%;

  &--hidden {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    // @extend .sidePanel;
    width: 40px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);

    & img {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      padding: 5px;

      &:hover {
        background: #ebebeb;
      }
      transform: rotate(180deg);
    }
  }
}
</style>

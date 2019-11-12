<template>
  <div class="main row">
    <div class="sidePanel col" v-if="sidePanel">
      <Controls :active="{ tab: currentTab.name, view: currentView.name }"></Controls>
      <keep-alive>
        <component :is="currentTab.component" class="display" />
      </keep-alive>
    </div>
    <div class="sidePanel--hidden" v-else>
      <img src="/src/assets/icons/caret.svg" @click="sidePanel = !sidePanel" />
    </div>
    <component v-if="!$store.state.app.mobile" :is="currentView.component" class="display"></component>
  </div>
</template>

<script>
import Controls from "../components/controls.vue";

export default {
  components: {
    Controls
  },
  data() {
    return {
      sidePanel: true,
      currentTab: this.$store.state.tabs[0],
      currentView: this.$store.state.tabs[2]
    };
  },
  mounted() {
    eventBus.$on("tab-changed", name => {
      this.currentTab = this.$store.state.tabs.find(el => el.name === name);
      this.addGroup = false;
    });
    eventBus.$on("view-changed", name => {
      this.currentView = this.$store.state.tabs.find(el => el.name === name);
      this.addGroup = false;
    });
    eventBus.$on("set-tab", () => {
      this.currentTab = this.$store.state.tabs[0];
    });
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
}
.display {
  display: flex;
  min-width: 320px;
  height: 100%;
  overflow-y: auto;
  width: 100%;
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
      height: 20px;
      transform: rotate(180deg);
    }
  }
}
</style>
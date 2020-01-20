<template>
  <div id="app" class="row">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {
      addGroup: false
    };
  },
  methods: {
    toggleMobile() {
      if (
        !this.$store.state.app.mobile &&
        window.innerWidth <= this.$store.state.app.break
      ) {
        eventBus.$emit("toggle-panel", true);
        this.$store.commit("TOGGLE_MOBILE", true);
      } else if (
        this.$store.state.app.mobile &&
        window.innerWidth > this.$store.state.app.break
      ) {
        this.$store.commit("TOGGLE_MOBILE", false);
        eventBus.$emit("set-tab");
      }
    }
  },
  mounted() {
    eventBus.$on("add-group", () => {
      this.addGroup = true;
    });
    eventBus.$on("toggle-panel", () => {
      this.sidePanel = !this.sidePanel;
    });
    if (window.innerWidth <= this.$store.state.app.break) {
      this.$store.commit("TOGGLE_MOBILE", true);
    }
    window.addEventListener("resize", () => this.toggleMobile());
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

body {
  height: 100vh;
  width: 100vw;
}

#app {
  font-family: Montserrat, sans-serif;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.row {
  display: flex;
  flex-direction: row;
}
.col {
  display: flex;
  flex-direction: column;
}
.wrap {
  flex-wrap: wrap;
}
.center {
  align-items: center;
}
.relative {
  position: relative;
}

.margin-left {
  margin-left: 10px;
}
.margin-auto {
  margin: auto;
}
.rotate-180 {
  transform: rotate(180deg);
}
.display {
  display: flex;
  min-width: 320px;
  height: 100%;
  overflow-y: auto;
  width: 100%;
  transition: width 0.3s ease;
}
</style>

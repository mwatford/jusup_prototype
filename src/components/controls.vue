<template>
  <nav class="controls">
    <div class="wrapper">
      <div class="row" v-if="!searchOn">
        <button
          v-for="tab in tabs.slice(0, this.$store.state.app.mobile ? 4 : 2)"
          :key="tab.name"
          :class="[active.tab === tab.name ? 'button--blue' : 'button', 'button']"
          @click="changeTab(tab.name)"
        >{{ tab.name.toUpperCase() }}</button>
      </div>
      <div class="row margin-left" v-if="!searchOn && !$store.state.app.mobile">
        <button
          v-for="tab in tabs.slice(2, 4)"
          :key="tab.name"
          :class="[active.view === tab.name ? 'button--red' : 'button', 'button']"
          @click="changeView(tab.name)"
        >{{ tab.name.toUpperCase() }}</button>
      </div>
      <input
        v-if="searchOn"
        type="text"
        name="search"
        placeholder="Search..."
        v-model="searchTerm"
        :class="mobile ? 'controls__search--mobile' : 'controls__search'"
      />
    </div>
    <img src="/assets/images/icons/search.svg" class="controls__icon" @click="searchOn = !searchOn" />
    <img src="/assets/images/icons/dots.svg" class="controls__icon" @click="toggleOptions" />
    <!-- <img
      src="/assets/images/icons/caret.svg"
      class="controls__icon"
      @click="togglePanel"
      v-if="!mobile"
    />-->
    <div class="options col" v-if="options">
      <router-link to="/add-group" @click="addGroup">
        <h3 class="options__item">Add new group</h3>
      </router-link>
      <!-- <h3 class="options__item">Join group</h3> -->
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    active: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      searchOn: false,
      searchTerm: "",
      options: false
    };
  },
  computed: {
    ...mapState({
      tabs: state => state.tabs,
      mobile: state => state.app.mobile
    })
  },
  methods: {
    changeTab(name) {
      window.eventBus.$emit("tab-changed", name);
      this.options = false;
    },
    changeView(name) {
      window.eventBus.$emit("view-changed", name);
    },
    toggleOptions(e) {
      this.options = !this.options;
      this.closeOptions(5000);
    },
    togglePanel() {
      window.eventBus.$emit("toggle-panel");
    },
    closeOptions(time) {
      if (time) {
        setTimeout(() => {
          this.options = false;
        }, time);
      } else {
        this.options = false;
      }
    },
    addGroup() {
      window.eventBus.$emit("add-group");
      this.closeOptions();
    }
  },
  watch: {
    searchTerm(value) {
      window.eventBus.$emit("search-changed", value);
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  all: unset;
}
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 72px;
  width: 100%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
  z-index: 1;

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 8px;
    height: 30px;
    width: 30px;
    padding: 5px;
    border-radius: 50%;

    &:hover {
      background: #ebebeb;
    }
  }

  &__search {
    width: 210px;
    height: 30px;
    border: 1px solid #b4b4b4;
    border-radius: 2px;
    padding: 0 5px;
    outline: none;

    &:focus {
      border: 1px solid #509df6;
    }

    &--mobile {
      @extend .controls__search;
      width: 200px;
    }
  }
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 10px;
  font-weight: bold;
  border: 1px solid #b4b4b4;
  color: #b4b4b4;
  width: 52px;
  height: 30px;
  border-radius: 2px;
  margin-left: -2px;
  background: #fff;
  outline: none;

  &--blue {
    color: #509df6;
    border: 2px solid #509df6;
    z-index: 1;
  }

  &--red {
    color: #e870ae;
    border: 2px solid #e870ae;
    z-index: 1;
  }
}
.wrapper {
  display: flex;
  width: 220px;
  flex-direction: row;
  justify-content: center;
}
.options {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 160px;
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  font-size: 11px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  z-index: 2;

  &__item {
    cursor: pointer;
    font-weight: normal;
    margin: 5px 0;

    &:hover {
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>

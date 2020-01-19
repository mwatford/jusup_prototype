<template>
  <div class="groups">
    <group-tile
      v-for="(group, index) in displayedGroups"
      :key="index"
      :name="group.name"
      :color="group.color"
      :active="group.active"
      :icon="group.icon"
      @click.native="toggle(group.name)"
    ></group-tile>
    <img
      src="/assets/images/icons/clear.svg"
      alt
      class="groups__confirm"
      v-if="selectedGroups.length"
      @click="clearSelected"
    />
    <addPostButton
      class="postButton"
      v-if="$store.state.app.mobile"
    ></addPostButton>
  </div>
</template>

<script>
import groupTile from "./group-tile.vue";
import addPostButton from "./Add-post.vue";
import { mapState } from "vuex";

export default {
  components: {
    "group-tile": groupTile,
    addPostButton
  },
  data() {
    return {
      searchTerm: ""
    };
  },
  computed: {
    ...mapState({
      groups: state => state.groups.getGroups()
    }),
    selectedGroups() {
      return this.groups.filter(el => el.active);
    },
    displayedGroups() {
      if (this.searchTerm) {
        return this.groups.filter(el => {
          if (
            el.name.match(this.searchTerm.toLowerCase()) &&
            el.name[0] === this.searchTerm[0].toLowerCase()
          ) {
            return el;
          }
        });
      } else {
        return this.groups;
      }
    }
  },
  methods: {
    toggle(name) {
      this.$store.commit("TOGGLE_GROUP", name);
    },
    confirm() {
      eventBus.$emit("tab-changed", 2);
    },
    clearSelected() {
      this.$store.commit("CLEAR_SELECTED_GROUPS");
    }
  },
  mounted() {
    eventBus.$on("search-changed", value => {
      this.searchTerm = value;
    });
  }
};
</script>

<style lang="scss" scoped>
.groups {
  position: relative;
  // justify-content: flex-start;
  // align-items: flex-start;
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-auto-rows: 140px;
  place-items: start center;
  // max-width: 420px;
  justify-content: center;
  padding: 20px 0;
  // margin: 20px 0;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  &__confirm {
    cursor: pointer;
    position: fixed;
    bottom: 80px;
    left: 300px;
    border-radius: 50%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.493);
    background: #5266c4;
    border: 3px solid #fff;
    padding: 5px;
  }
}
.postButton {
  grid-column: 1 / -1;
  grid-row: -1;
}
</style>

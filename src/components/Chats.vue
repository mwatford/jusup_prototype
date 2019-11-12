<template>
  <div class="chats col">
    <chat v-for="group in filteredChats" :key="group.name" :group="group"></chat>
  </div>
</template>

<script>
import chat from "./chat.vue";
import { mapState } from "vuex";

export default {
  components: {
    chat
  },
  data() {
    return {
      searchTerm: ""
    };
  },
  computed: {
    ...mapState({
      groups: state => state.groups
    }),
    chats() {
      return this.groups.filter(el => el.chat);
    },
    filteredChats() {
      if (this.searchTerm) {
        return this.chats.filter(el => {
          if (
            el.name.match(this.searchTerm.toLowerCase()) &&
            el.name[0] === this.searchTerm[0].toLowerCase()
          ) {
            return el;
          }
        });
      } else {
        return this.chats;
      }
    }
  },
  mounted() {
    eventBus.$on("search-changed", data => {
      this.searchTerm = data;
    });
  }
};
</script>

<style lang="scss" scoped>
.chats {
  align-items: center;
  width: 100%;
  position: relative;
}
</style>
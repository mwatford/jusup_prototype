<template>
  <div class="desk row" v-if="filteredGroups.length">
    <component
      v-for="(group, index) in filteredGroups"
      :is="displayGroup(group.name)"
      :key="index"
      :group="group"
    ></component>
    <addPostButton></addPostButton>
  </div>
  <div v-else class="desk col">Nothing here.</div>
</template>

<script>
import Post from "./post.vue";
import posts from "../scripts/posts.js";
import addPostButton from "./Add-post.vue";
import { mapState } from "vuex";
import facebookGroup from "./facebookGroup.vue";
import instagramGroup from "./instagramGroup.vue";
import pinterestGroup from "./pinterestGroup.vue";
import groupView from "./groupView.vue";

export default {
  components: {
    addPostButton
  },
  data() {
    return {
      searchTerm: "",
      post: {
        facebook: facebookGroup,
        instagram: instagramGroup,
        pinterest: pinterestGroup,
        basic: groupView
      }
    };
  },
  computed: {
    ...mapState({
      posts: state => {
        let posts = [];
        const activeGroups = state.groups.filter(el => el.active);

        if (activeGroups.length) {
          activeGroups.forEach(active => {
            state.posts.filter(post => {
              if (post.group === active.name) {
                posts.push(post);
              }
            });
          });
        } else {
          posts = state.posts;
        }

        if (posts.length === 0 && activeGroups.length === 0) {
          state.groups.getGroups().forEach(el => posts.push(...el.posts));
        }

        return posts.sort((a, b) => {
          if (a.id < b.id) {
            return 1;
          } else {
            return -1;
          }
        });
      },
      groups: state => {
        let groups = [];
        const activeGroups = state.groups.getGroups().filter(el => el.active);

        if (activeGroups.length) {
          activeGroups.forEach(active => {
            state.groups.getGroups().filter(group => {
              if (group.name === active.name) {
                groups.push(group);
              }
            });
          });
        } else {
          groups = state.groups.getGroups();
        }
        return groups;
      }
    }),
    filteredPosts() {
      if (this.searchTerm) {
        return this.posts.filter(el => {
          if (
            el.group.match(this.searchTerm.toLowerCase()) &&
            el.group[0] === this.searchTerm[0].toLowerCase()
          ) {
            return el;
          }
        });
      } else {
        return this.posts;
      }
    },
    filteredGroups() {
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
    displayGroup(input) {
      const socialMedia = ["facebook", "instagram", "pinterest"];
      if (socialMedia.find(el => el === input) !== undefined) {
        return this.post[input];
      } else return this.post.basic;
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
// * {
//   box-sizing: border-box;
// }
.desk {
  // @media (min-width: 1060px) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 32.5%);
  grid-auto-rows: 550px;
  place-items: center;
  justify-content: center;
  grid-column-gap: 23px;
  grid-row-gap: 11.5px;
  align-items: start;
  padding: 11.5px;
  // }
  // align-items: center;
  // justify-content: center;
  // width: 100%;
  // position: relative;
  // flex-wrap: wrap;
  // padding: 0 20px;
}
</style>

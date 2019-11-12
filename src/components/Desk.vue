<template>
  <div class="desk col" v-if="filteredPosts.length">
    <post v-for="(post, index) in filteredPosts" :key="index" :post="post"></post>
    <addPostButton></addPostButton>
  </div>
  <div v-else class="desk col">Nothing here.</div>
</template>

<script>
import Post from "./post.vue";
import posts from "../scripts/posts.js";
import addPostButton from "./Add-post.vue";
import { mapState } from "vuex";

export default {
  components: {
    post: Post,
    addPostButton
  },
  data() {
    return {
      searchTerm: ""
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
          state.groups.forEach(el => posts.push(...el.posts));
        }

        return posts.sort((a, b) => {
          if (a.id < b.id) {
            return 1;
          } else {
            return -1;
          }
        });
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
  // @media (min-width: 900px) {
  //   // align-items: flex-start;
  //   padding: 20px;
  //   // flex-direction: row;
  //   // flex-wrap: wrap;
  //   // justify-content: space-between;
  //   display: grid;
  //   grid-gap: 20px;
  //   grid-template-columns: repeat(auto-fill, minmax(304px, 1fr));
  //   // grid-auto-rows: 600px;
  //   place-items: center;
  //   justify-content: center;
  // }
  align-items: center;
  width: 100%;
  position: relative;
}
</style>
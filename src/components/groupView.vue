<template>
  <section
    :class="[
      `group col`,
      `width--${width}`,
      `height--${height}`,
      { 'group--mobile': mobile },
      { 'group--fullscreen': fullscreen }
    ]"
    @drop.prevent="addPost"
    @dragover.prevent
  >
    <picture :class="`header`" :style="{ background: group.color }">
      <picture class="header__icon">
        <img :src="group.icon" />
      </picture>
      <h4>
        {{ group.name.capitalize() }}
      </h4>
      <picture @click="fullscreen = !fullscreen">
        <base-icon
          class="header__icon"
          :iconType="fullscreen ? 'paw' : 'enlarge'"
          iconColor="#fff"
          height="25"
          width="25"
        ></base-icon>
      </picture>
      <picture @click="sizeOptions = !sizeOptions" class="optionsButton">
        <base-icon
          iconType="dots"
          width="25"
          height="25"
          iconColor="#fff"
        ></base-icon>
      </picture>
    </picture>
    <div
      :class="[`content`, { center: posts.length === 0 }]"
      :style="{ border: `1px solid ${color}` }"
    >
      <div class="row sizeOptions" v-if="sizeOptions">
        <ul class="col">
          <h5>Height</h5>
          <li @click.stop="changeHeight('small')">Small</li>
          <li @click.stop="changeHeight('medium')">
            Medium
          </li>
          <li @click.stop="changeHeight('large')">Large</li>
        </ul>
        <ul class="col">
          <h5>Width</h5>
          <li @click.stop="changeWidth('small')">Small</li>
          <li @click.stop="changeWidth('medium')">
            Medium
          </li>
          <li @click.stop="changeWidth('large')">Large</li>
        </ul>
      </div>
      <h2 v-if="posts.length === 0" :style="{ marginTop: '20px' }">No posts</h2>
      <post
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
        :color="color"
        :groupName="group.name"
      ></post>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import size from "../mixins/size.js";
import post from "./basicPost.vue";

export default {
  components: {
    post
  },
  props: {
    group: {
      type: Object,
      required: true
    }
  },
  mixins: [size],
  data() {
    return {
      fullscreen: false
    };
  },
  computed: {
    ...mapState({
      mobile: state => state.app.mobile,
      posts() {
        return this.$store.state.posts.filter(
          el => el.group === this.group.name
        );
      }
    }),
    color() {
      return this.group.color;
    },
    icon() {
      return this.group.icon;
    },
    user() {
      const user = Object.assign(
        {},
        this.group.members.find(member => member.name === this.group.user)
      );
      return user;
    }
  },
  methods: {
    mapReactions() {
      if (this.post.reactions) {
        const reactions = {};
        for (let key of this.post.reactions) {
          reactions[key.name] = false;
        }
        return reactions;
      }
      return null;
    },
    react(name) {
      this.post.reactions.find(el => {
        if (el.name === name) {
          if (!this.liked[name]) {
            el.amount++;
            this.liked[name] = true;
          } else {
            el.amount--;
            this.liked[name] = false;
          }
        }
      });
    },
    toggleSizeOptions() {
      this.sizeOptions = true;
    },
    addPost(e) {
      const post = {
        group: this.group.name,
        author: this.group.user,
        message: null,
        image: null,
        reactions: this.setReactions(),
        size: "small",
        comments: []
      };
      if (e.dataTransfer.getData("message").length > 0) {
        post.message = e.dataTransfer.getData("message");
      }
      if (e.dataTransfer.getData("image") !== "") {
        post.image = e.dataTransfer.getData("image");
      }
      if (
        e.dataTransfer.getData("type") === "post" &&
        (post.message !== null || post.image !== null)
      ) {
        this.$store.commit("ADD_NEW_POST", post);
      }
    },
    setReactions() {
      if (this.group.reactions !== null) {
        let reactions = [];

        for (let item of this.group.reactions) {
          reactions.push({
            name: item.name,
            color: item.color,
            amount: 0
          });
        }
        return reactions;
      } else return null;
    },
    addComment(e) {
      const asd = this.group.members.find(
        member => member.name === this.group.user
      );
      const comment = {
        avatar: asd.avatar,
        text: null,
        image: null
      };
      if (e.dataTransfer.getData("message").length > 0) {
        comment.text = e.dataTransfer.getData("message");
      }
      if (e.dataTransfer.getData("image") !== "") {
        comment.image = e.dataTransfer.getData("image");
      }
      if (
        e.dataTransfer.getData("type") === "post" &&
        (comment.text !== null || comment.image !== null)
      ) {
        this.comments.push(comment);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.group {
  display: flex;
  width: 100%;
  // margin: 20px 7px;
  min-width: 300px;
  grid-row: span 1;
  height: 100%;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  background: #fff;

  &--fullscreen {
    position: absolute;
    z-index: 5;
    width: 90vw;
    height: 90vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // box-shadow: 0 0 20px 200px rgba(0, 0, 0, 0.8);

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);
    }
  }
}
.width {
  &--small {
    grid-column: span 1;
  }
  &--medium {
    @media (max-width: 1080px) {
      grid-column: span 2;
    }
    grid-column: span 2;
  }
  &--large {
    grid-column: 1 / -1;
  }
}
.height {
  &--small {
    grid-row: span 1;
  }
  &--medium {
    @media (max-width: 1080px) {
      grid-row: span 2;
    }
    grid-row: span 2;
  }
  &--large {
    grid-row: span 3;
  }
}
.header {
  background: #2267a5;
  display: flex;
  width: 100%;
  height: 51px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 8.5px;
  color: #fff;

  h4 {
    display: flex;
    width: 100%;
    margin: none;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 3px solid #fff;
    // border-radius: 50%;

    & > img {
      margin: 8.5px;
      margin-right: 33px;
      margin-left: 0;
      height: 33px;
      width: 33px;
    }
  }
}
.dot {
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background: #000;
  margin: 1.5px;
}
.content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom: 20px;
  position: relative;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  background: #fff;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
}

.wrapper {
  margin: 0;
  padding: 3px 10px;
  border: 1px solid #e0e0e0;
  border-top: none;
  border-radius: 3px;
}
.optionsButton {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 30px;
  min-width: 30px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
}

.sizeOptions {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  // width: 160px;
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  color: #000;
  font-size: 11px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  z-index: 3;
  list-style-type: none;

  & ul {
    list-style-type: none;
    margin: 0 5px;
  }

  & li {
    cursor: pointer;
    font-weight: normal;
    margin: 5px 0;

    &:hover {
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>

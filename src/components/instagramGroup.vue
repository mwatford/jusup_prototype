<template>
  <section :class="`group width--${width} height--${height} col`">
    <div class="header">
      <!-- <picture class="header__icon">
        <img src="/assets/images/icons/instagram.svg" />
      </picture> -->
      <base-icon iconType="instagram" iconColor="#fff" width="33" height="33">
      </base-icon>
      <h4>Instagram board</h4>
      <picture class="optionsButton" @click="sizeOptions = !sizeOptions">
        <img src="/assets/images/icons/Three-dots.svg" />
        <ul class="sizeOptions col" v-if="sizeOptions">
          <li @click.stop="changeSize('small')">Small</li>
          <li @click.stop="changeSize('medium')">
            Medium
          </li>
          <li @click.stop="changeSize('large')">Large</li>
        </ul>
      </picture>
    </div>
    <div class="content col">
      <article class="post" v-for="(post, index) in posts" :key="index">
        <div class="post__header row">
          <img :src="`/assets/images/avatars/avatar${index + 1}.png`" alt="" />
          <h4>{{ post.author }}</h4>
          <div class="dots row">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <img :src="post.image" />
        <div class="wrapper col">
          <div class="post__actions">
            <img src="/assets/images/icons/like-heart_b.svg" alt="" />
          </div>
          <h5 class="post__likes">
            <strong>{{ post.likes }} likes</strong>
          </h5>
          <p class="post__message">
            <strong>{{ post.author }}</strong> {{ post.message }}
            <span :style="{ color: '#3b59f8' }">{{ post.hashtags }}</span>
          </p>
          <div class="post__comments">
            <p v-for="(comment, index) in post.comments" :key="index">
              <strong>{{ comment.author }}</strong> {{ comment.text }}
            </p>
          </div>
          <h5>{{ post.date }}</h5>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import size from "../mixins/size.js";
import { mapState } from "vuex";

export default {
  props: ["group"],
  mixins: [size],
  data() {
    return {
      sizeOptions: false
    };
  },
  computed: {
    ...mapState({
      posts: state => state.posts.filter(el => el.group === "instagram")
    }),
    size() {
      return this.group.size;
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
  background: radial-gradient(
    circle farthest-side at 25% 450%,
    rgba(249, 237, 50, 1) 0%,
    rgba(248, 213, 59, 1) 3.61%,
    rgba(245, 161, 78, 1) 12.08%,
    rgba(242, 118, 94, 1) 20.41%,
    rgba(240, 85, 107, 1) 28.44%,
    rgba(239, 61, 116, 1) 36.08%,
    rgba(238, 47, 121, 1) 43.17%,
    rgba(238, 42, 123, 1) 49.16%,
    rgba(233, 42, 126, 1) 54.73%,
    rgba(219, 42, 134, 1) 61.27%,
    rgba(195, 42, 147, 1) 68.29%,
    rgba(162, 42, 165, 1) 75.67%,
    rgba(120, 42, 189, 1) 83.31%,
    rgba(68, 42, 218, 1) 91.19%,
    rgba(7, 42, 251, 1) 99.11%,
    rgba(0, 42, 255, 1) 100%
  );
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Stlye=2)";
  filter: progid:DXImageTransform1.Microsoft.Alpha(Stlye=2);

  // background-position: 5.68%;

  display: flex;
  width: 100%;
  min-height: 51px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 8.5px;
  color: #fff;

  h4 {
    display: flex;
    width: 100%;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 48px;
    min-width: 48px;
    border: 3px solid #fff;
    border-radius: 50%;
    margin-right: 16px;
    padding: 5px;

    & img {
      height: 26px;
      width: 26px;
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
  padding-bottom: 20px;
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
}

.post {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 90%;
  max-width: 615px;
  color: #464646;
  font-size: 13px;

  &__header {
    border-radius: 3px;
    border: 1px solid #e0e0e0;
    border-bottom: none;
    height: 60px;
    align-items: center;
    padding: 0 10px;

    h4 {
      font-weight: bold;
      font-size: 14px;
      width: 100%;
    }

    & > img {
      min-width: 42px;
      height: 42px;
      margin-right: 10px;
    }
  }

  & > img {
    border: 1px solid #e0e0e0;
    width: 100%;
    height: auto;
  }

  &__actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 25px;
  }

  &__comments {
    p {
      margin: 2px 0;
    }
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
  min-height: 25px;
  min-width: 25px;
  border-radius: 50%;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  & img {
    cursor: pointer;
  }
}

.sizeOptions {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 160px;
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

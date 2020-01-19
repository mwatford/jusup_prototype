<template>
  <picture :class="`group width--${width} height--${height} col`">
    <picture class="header" :style="{ background: group.color }">
      <base-icon
        iconType="facebook"
        height="33"
        width="33"
        iconColor="#fff"
      ></base-icon>
      <h4>Facebook board</h4>
      <picture class="optionsButton" @click="sizeOptions = !sizeOptions">
        <base-icon
          iconType="dots"
          width="18"
          height="18"
          iconColor="#fff"
        ></base-icon>
        <div class="sizeOptions" v-if="sizeOptions">
          <ul class="col">
            <li @click.stop="changeHeight('small')">Small</li>
            <li @click.stop="changeHeight('medium')">
              Medium
            </li>
            <li @click.stop="changeHeight('large')">Large</li>
          </ul>
          <ul class="col">
            <li @click.stop="changeWidth('small')">Small</li>
            <li @click.stop="changeWidth('medium')">
              Medium
            </li>
            <li @click.stop="changeWidth('large')">Large</li>
          </ul>
        </div>
      </picture>
    </picture>
    <div class="content col" :style="{ border: `1px solid ${group.color}` }">
      <div class="stories row wrap">
        <h5
          :style="{
            width: '100%',
            fontWeight: 'bold',
            color: 'gray'
          }"
        >
          Stories
        </h5>
        <picture class="story" v-for="(story, index) in stories" :key="index">
          <img :src="story.user" alt="#" class="story__user" />
          <img :src="story.image" alt="#" class="story__highlight" />
        </picture>
      </div>
      <div class="posts">
        <div class="post" v-for="(post, index) in posts" :key="index">
          <div class="post__header row">
            <img :src="post.avatar" alt="" />
            <div class="col">
              <h4>{{ post.author }}</h4>
              <h5>{{ post.time }}</h5>
            </div>
            <div class="dots row">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <p :style="{ margin: '10px' }">{{ post.message }}</p>
          <img :src="post.image" />
          <div class="wrapper col">
            <div class="post__info">
              <p>{{ post.comments }} comments</p>
            </div>
            <div class="post__actions">
              <h4>Like</h4>
              <h4>Comment</h4>
              <h4>Share</h4>
            </div>
            <div class="post__comments">
              <p v-for="(comment, index) in post.comments" :key="index">
                <strong>{{ comment.author }}</strong> {{ comment.text }}
              </p>
            </div>
            <h5>{{ post.date }}</h5>
          </div>
        </div>
      </div>
    </div>
  </picture>
</template>

<script>
import size from "../mixins/size.js";

export default {
  props: ["group"],
  mixins: [size],
  data() {
    return {
      stories: [
        {
          image: "/assets/images/images/alert1-image.png",
          user: "/assets/images/avatars/avatar4.png"
        },
        {
          image: "/assets/images/images/alert4-image.png",
          user: "/assets/images/avatars/avatar5.png"
        }
      ]
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.filter(el => el.group === "facebook");
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
  display: flex;
  width: 100%;
  min-height: 55px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  color: #fff;

  h4 {
    display: flex;
    width: 100%;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 33px;
    width: 33px;
    margin-right: 16px;

    & img {
      height: 100%;
      width: 100%;
    }
  }
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
.dot {
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background: gray;
  margin: 1.5px;
}
.content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 20px;
  overflow-y: scroll;
  width: 100%;
  background: #e2e2e2;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
}
.stories {
  margin: 5px 0 10px 0;
  padding: 15px;
  border: 1px solid #ececec;
  border-radius: 4px;
  max-width: 615px;
  width: 95%;
  background: #fff;
}
.story {
  height: 200px;
  width: 115px;
  border-radius: 8px;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 10px 5px 0 0;

  &__highlight {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__user {
    height: 35px;
    width: 35px;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 10px;
  }
}
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.post {
  display: flex;
  flex-direction: column;
  margin: 5px 0 10px 0;
  max-width: 615px;
  width: 95%;
  color: #464646;
  font-size: 13px;
  background: #fff;
  border-radius: 5px;

  &__header {
    border-radius: 4px;
    border-bottom: none;
    height: 60px;
    align-items: center;
    padding: 0 10px;
    background: #fff;

    & > .col {
      width: 100%;
    }

    h4 {
      font-weight: bold;
      font-size: 14px;
      width: 100%;
      color: #3b5988;
    }

    & > img {
      min-width: 42px;
      height: 42px;
      margin-right: 10px;
    }
  }

  & > img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &__info {
    display: flex;
    justify-content: flex-end;
    width: 95%;
    margin-top: 10px;
  }

  &__actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 25px;
    width: 95%;
    border-top: 1px solid #e0e0e0;
    padding-top: 10px;
    margin: 10px 0;
    justify-content: space-between;

    & h4 {
      cursor: pointer;
      width: 33%;
      text-align: center;
      padding: 5px;
      margin: 5px 0;
      font-weight: bold;

      &:hover {
        background: #ededed;
      }
    }
  }
}
.wrapper {
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>

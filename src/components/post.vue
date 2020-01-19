<template>
  <article
    :class="[`post`, `post--${size}`, { 'post--mobile': mobile }]"
    @drop.prevent="addComment"
    @dragover.prevent
  >
    <div :class="[color ? `header header--${color}` : 'header']">
      <div class="row">
        <picture class="header__icon">
          <img :src="icon" />
        </picture>
        <div class="col">
          <h4 class="header__groupName">
            {{ post.group.capitalize() }}
          </h4>
          <h4 class="header__author">{{ author.name }}</h4>
        </div>
      </div>
      <picture class="post__optionsButton" @click="toggleSizeOptions">
        <img src="/assets/images/icons/Three-dots.svg" />
        <ul class="post__sizeOptions col" v-if="sizeOptions">
          <li @click.stop="selectSize('small')">Small</li>
          <li @click.stop="selectSize('medium')" v-if="clientWidth >= 1080">
            Medium
          </li>
          <li @click.stop="selectSize('large')">Large</li>
        </ul>
      </picture>
    </div>
    <div class="col content">
      <div class="content__header row">
        <picture class="content__avatar content__avatar">
          <img :src="author.avatar" alt />
        </picture>
        <p class="content__text">{{ post.message }}</p>
      </div>
      <picture class="col content__image" v-if="post.image">
        <img :src="post.image" />
        <div class="content__reactions row">
          <div
            v-for="(reaction, index) in post.reactions"
            :key="index"
            class="row"
          >
            <img
              :src="`/assets/images/icons/like-${reaction.name}.svg`"
              @click="react(reaction.name)"
            />
            <div>{{ reaction.amount }}</div>
          </div>
        </div>
      </picture>
      <div class="content__comments" v-if="comments">
        <div class="col" v-for="(comment, index) in comments" :key="index">
          <div class="comment row">
            <p class="comment__text">{{ comment.text }}</p>
            <picture class="comment__avatar">
              <img :src="comment.avatar" alt />
            </picture>
          </div>
          <picture class="comment__image" v-if="comment.image">
            <img :src="comment.image" alt />
          </picture>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      liked: this.mapReactions(),
      // size: this.post.size,
      sizeOptions: false
    };
  },
  computed: {
    ...mapState({
      mobile: state => state.app.mobile
    }),
    clientWidth() {
      return window.innerWidth;
    },
    group() {
      const groupName = this.post.group;
      const group = this.$store.state.groups.find(el => el.name === groupName);
      return group;
    },
    color() {
      return this.group.color;
    },
    icon() {
      return this.group.icon;
    },
    comments() {
      return this.post.comments;
    },
    author() {
      return this.group.members.find(
        member => member.name === this.post.author
      );
    },
    size() {
      return this.post.size;
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
    selectSize(val) {
      this.$store.commit("POST_SIZE", { val, id: this.post.id });
      this.sizeOptions = false;
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
.post {
  @media (min-width: 900px) {
    // height: 100%;
    margin: 20px 0;
  }
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  background: #fff;
  margin: 20px 7px;
  // min-width: 300px;
  width: 100%;
  min-width: 300px;
  // height: 100%;

  &--large {
    @extend .post;
    grid-column: 1 / -1;
  }

  &--medium {
    @media (max-width: 1080px) {
      grid-column: span 2;
    }
    @extend .post;
    grid-column: span 2;
    // height: 700px;
  }

  &--small {
    @extend .post;
    grid-column: span 1;
    // width: 300px;
    // height: 450px;
  }

  &__optionsButton {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 25px;
    width: 25px;
    border-radius: 50%;

    &:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    & img {
      cursor: pointer;
    }
  }

  &__sizeOptions {
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
}

.header {
  display: flex;
  width: 100%;
  height: 72px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  color: #fff;

  & .col {
    justify-content: center;
  }

  &--violet {
    background: #9764f6;
  }

  &--orange {
    background: #ef7b69;
  }

  &--yellow {
    background: #e39d33;
  }

  &--blue {
    background: #509df6;
  }

  &--gray {
    background: #ccc;
  }

  &--pink {
    background: #cd64ff;
  }

  &--lightPink {
    background: #efaeae;
  }

  &--green {
    background: #5ecb8a;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    font-size: 10px;
    border: 3px solid #fff;
    border-radius: 50%;
    margin-right: 16px;
    padding: 5px;

    & img {
      height: 80%;
    }
  }

  &__groupName,
  &__message {
    font-weight: normal;
    line-height: 20px;
    font-size: 16px;
  }

  &__author {
    font-weight: normal;
    line-height: 16px;
    font-size: 14px;
  }
}

.content {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #333333;
  margin-bottom: 30px;
  padding: 2% 5%;

  &__header {
    display: flex;
    align-items: center;
    margin: 20px 0;
    width: 100%;
  }

  &__avatar {
    height: 48px;
    width: 48px;
    margin-right: 8px;
    align-self: flex-start;

    & img {
      border-radius: 50%;
      height: 90%;
      width: 90%;
    }

    &--orange {
      border: 3px solid #e39d33;
      border-radius: 50%;
    }
  }

  &__text {
    word-break: break-all;
  }

  &__image {
    position: relative;
    width: 75%;

    & img {
      width: 100%;
      object-fit: cover;
      height: auto;
      max-height: 450px;
    }
  }

  &__reactions {
    display: flex;
    background: #f7f7f7;
    width: 100%;
    height: 40px;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;

    & .row {
      margin: 0 5px;
      min-width: 50px;
      justify-content: center;
      align-items: center;

      & img {
        cursor: pointer;
        height: 22px;
        width: 22px;
        margin-right: 3px;
      }
    }
  }

  &__comments {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    margin-top: 20px;

    .col {
      width: 100%;
      align-items: flex-end;
    }
  }
}

.comment {
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;

  &__text {
    display: flex;
    width: 100%;
    word-break: break-all;
    justify-content: flex-end;
  }

  &__avatar {
    align-self: flex-start;
    display: flex;
    height: 30px;
    width: 30px;
    margin-left: 5px;

    img {
      transform: rotateY(180deg);
      width: 100%;
      height: 100%;
    }
  }

  &__image {
    display: flex;
    width: 70%;
    max-height: 400px;
    margin: 10px 25px;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: 0 0;
    }
  }
}
</style>

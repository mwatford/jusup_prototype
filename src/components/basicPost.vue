<template>
  <article class="post">
    <div class="post__header row">
      <img :src="author.avatar" class="post__avatar" />
      <div class="details col">
        <h3 class="details__author" :style="{ color: color }">
          {{ post.author }}
        </h3>
        <p class="details__time">12 min.</p>
      </div>
      <base-icon
        iconType="paw"
        height="35"
        width="35"
        :color="color"
      ></base-icon>
    </div>
    <div class="post__content col">
      <p class="post__message">{{ post.message }}</p>
      <picture class="post__image">
        <img :src="post.image" v-if="post.image" />
        <div class="post__reactions row" :style="{ background: color + '44' }">
          <div
            class="reaction row wrap center"
            v-for="(reaction, index) in post.reactions"
            :key="index"
            :style="{
              color: reaction.liked
                ? getReactionColor(reaction.name, groupName)
                : '#222222'
            }"
          >
            <base-icon
              :iconType="reaction.name"
              width="25"
              height="25"
              :iconColor="
                reaction.liked
                  ? getReactionColor(reaction.name, groupName)
                  : '#222222'
              "
              @click.native="react(reaction.name)"
            />
            <div>{{ reaction.amount }}</div>
          </div>
        </div>
      </picture>
    </div>
    <div class="post__comments col">
      <ul class="comments" v-if="showComments && post.comments.length">
        <li v-for="(comment, index) in post.comments" :key="index" tag="div">
          <div class="asd">{{ comment.text }}</div>
        </li>
      </ul>
      <div
        class="extend"
        :style="{ background: color }"
        @click="showComments = !showComments"
      >
        <base-icon
          class="margin-auto"
          iconType="caret"
          color="#ffffff"
          height="12"
          width="12"
        ></base-icon>
      </div>
    </div>
  </article>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["post", "color", "groupName"],
  data() {
    return {
      liked: this.mapReactions(),
      showComments: false
    };
  },
  computed: {
    ...mapGetters(["getReactionColor"]),
    author() {
      return this.$store.state.groups
        .getGroups()
        .find(el => el.name === this.post.group)
        .members.find(el => el.name === this.post.author);
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
    react(name, color) {
      this.$store.commit("REACT", { name, id: this.post.id });
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  display: grid;
  grid-template-columns: 45px 1fr 45px;
  place-items: center;
  flex-direction: row;
  margin-top: 20px;
  // max-width: 615px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-width: 270px;
  // padding: 0 10px;

  &__header,
  &__content {
    width: 100%;
    padding: 0 10px;
  }

  &__header {
    grid-column: 1 / -1;
  }

  &__avatar {
    width: 45px;
    height: 45px;
  }

  &__content {
    position: relative;
    place-self: start;
    grid-column: 1 / -1;
    width: 100%;
  }

  &__message {
    margin-left: 55px;
    margin-bottom: 20px;
  }

  &__image {
    position: relative;
    height: 350px;
    // overflow-x: scroll;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__reactions {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35px;
    padding: 0 10px;
    // background: #ededed;
  }

  &__comments {
    grid-column: 1 / -1;
    width: 100%;
  }
}

.details {
  width: 100%;
  margin-left: 10px;
  margin-bottom: 20px;

  &__author {
    width: 100%;
    place-self: center start;
    font-weight: bold;
    font-size: 24px;
  }

  &__time {
    font-size: 12px;
  }
}
.reaction {
  width: 55px;

  svg {
    margin-right: 5px;
  }
}
.extend {
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 18px;
}
</style>

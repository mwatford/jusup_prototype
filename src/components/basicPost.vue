<template>
  <article class="post">
    <img :src="author.avatar" class="post__avatar" />
    <p class="post__message">{{ post.message }}</p>
    <div class="post__content col">
      <img :src="post.image" class="post__image" v-if="post.image" />
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
    </div>
  </article>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["post", "color", "groupName"],
  data() {
    return {
      liked: this.mapReactions()
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

    // getReactionColor(reaction, group) {
    //   return this.$store.state.groups
    //     .getGroups()
    //     .find(el => el.name === group)
    //     .reactions.find(el => el.name === reaction).color;
    // }
  }
};
</script>

<style lang="scss" scoped>
.post {
  display: grid;
  grid-template-columns: 45px 1fr;
  place-items: center;
  flex-direction: row;
  margin-top: 20px;
  // max-width: 615px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-width: 270px;
  margin: 20px;
  padding: 0 10px;

  &__avatar {
    width: 45px;
    height: 45px;
  }

  &__content {
    position: relative;
    place-self: start;
    grid-column: 1 / -1;
    width: 100%;
    // margin: 12px 0 0 10px;
  }

  &__image {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }

  &__message {
    place-self: center start;
    margin-left: 10px;
  }

  &__reactions {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35px;
    padding: 0 10px;
    // background: #ededed;
  }
}
.reaction {
  width: 55px;

  svg {
    margin-right: 5px;
  }
}
</style>

<template>
  <article class="post">
    <img :src="author.avatar" class="post__avatar" />
    <p class="post__message">{{ post.message }}</p>
    <div class="post__content col">
      <img :src="post.image" class="post__image" v-if="post.image" />
      <div class="post__reactions row">
        <div
          class="reaction row wrap center"
          v-for="(reaction, index) in post.reactions"
          :key="index"
        >
          <img
            :src="`/assets/images/icons/like-${reaction.name}.svg`"
            @click="react(reaction.name)"
          />
          <div>{{ reaction.amount }}</div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {
      liked: this.mapReactions()
    };
  },
  computed: {
    author() {
      return this.$store.state.groups
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
    react(name) {
      this.$store.commit("REACT", { name, id: this.post.id });
    }
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
  max-width: 615px;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  min-width: 270px;
  margin: 20px;

  &__avatar {
    width: 45px;
    height: 45px;
  }

  &__content {
    place-self: start;
    grid-column: 2 / -1;
    width: 90%;
    margin: 12px 0 0 10px;
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
    height: 35px;
    padding: 0 10px;
    background: #ededed;
  }
}
.reaction {
  width: 55px;

  img {
    height: 25px;
    margin-right: 5px;
  }
}
</style>

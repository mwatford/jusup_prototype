<template>
  <div class="alert">
    <picture class="alert__image">
      <!-- <img
        :src="`/assets/images/icons/like-${reactionAnimation.name}.svg`"
        v-if="!reactionAnimation.liked"
      /> -->
      <img :src="alert.image" @dblclick="deleteAlert(index)" />
    </picture>
    <div class="info">
      <div class="user">
        <picture class="user__avatar">
          <img :src="alert.avatar" />
        </picture>
        <div class="col">
          <h4 class="user__author">{{ alert.author }}</h4>
          <h4 class="user__group">{{ alert.group.capitalize() }}</h4>
        </div>
      </div>
      <div class="wrapper">
        <div class="info__date">{{ alert.date }}</div>
        <div class="reactions row" v-if="reactions">
          <base-icon
            v-for="(reaction, index) in reactions"
            :key="index"
            class="icon"
            :iconColor="
              reaction.liked
                ? getReactionColor(reaction.name, alert.group)
                : '#8a8a8a'
            "
            width="25"
            height="25"
            :iconType="reaction.name"
            @click.native="react(reaction.name, alert.id)"
          >
          </base-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    alert: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      reactionAnimation: null
    };
  },
  computed: {
    ...mapGetters(["getReactionColor"]),
    reactions() {
      const reactions = this.$store.state.posts.find(
        el => el.id === this.alert.id
      ).reactions;
      return Array.isArray(reactions) ? reactions : false;
    }
  },
  methods: {
    deleteAlert(index) {
      this.$store.commit("DELETE_ALERT", index);
    },
    react(name, id) {
      this.$store.commit("REACT", { name, id });
    }
  }
};
</script>

<style lang="scss" scoped>
.alert {
  @media (min-width: 1060px) {
    max-width: 300px;
    width: 100%;
  }
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  margin: 20px 0;
  width: 90%;
  background: #fff;
  // height: 500px;

  &__image {
    position: relative;
    width: 100%;
    // height: 428px;

    & img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }
}
.info {
  display: flex;
  padding: 0 19px;
  height: 72px;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  &__date {
    color: #6c6c6c;
    font-size: 13px;
  }
}
.icon {
  cursor: pointer;
  margin: 0 2px;
}
.user {
  align-items: center;
  display: flex;

  &__avatar {
    height: 48px;
    width: 48px;
    margin-right: 19px;
    border-radius: 50%;

    & img {
      width: 100%;
      height: auto;
    }
  }

  &__author {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 4px;
  }

  &__group {
    font-size: 14px;
    font-weight: normal;
    color: #6c6c6c;
  }
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
}
.reactions {
  width: 100%;
  padding-left: 3px;
  display: flex;
  justify-content: flex-end;
}
</style>

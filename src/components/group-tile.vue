<template>
  <div class="groupTile">
    <div
      :class="[
        'groupTile__icon',
        color[0] !== '#' ? `groupTile__icon--${color}` : '',
        { 'groupTile__icon--selected': active }
      ]"
      :style="{ background: color }"
    >
      <img :src="icon" />
    </div>
    <h1 class="groupTile__name">
      {{ name.capitalize() }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  methods: {
    addPost(e) {
      const post = {
        group: this.name,
        author: this.getUserInGroup(this.name),
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
    getUserInGroup(groupName) {
      const group = this.$store.state.groups.find(el => el.name === groupName);

      return group.user;
    },
    setReactions() {
      let group = this.$store.state.groups.find(el => el.name === this.name);

      if (group.reactions !== null) {
        let reactions = [];

        for (let item of group.reactions) {
          reactions.push({
            name: item,
            amount: 0
          });
        }
        return reactions;
      } else return null;
    }
  }
};
</script>

<style lang="scss" scoped>
.groupTile {
  box-sizing: content-box;
  position: relative;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
  user-select: none;

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 78px;
    width: 78px;
    border-radius: 8px;

    img {
      width: 48px;
      height: 48px;
    }

    &--instagram {
      background: #2267a5;
      background: -moz-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      background: -webkit-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      background: linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
    }

    &--selected {
      border: 3px solid #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
    }
  }

  &__name {
    font-size: 14px;
    font-weight: normal;
    margin-top: 15px;
  }
}
</style>

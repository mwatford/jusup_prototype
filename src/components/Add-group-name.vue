<template>
  <form class="col" name="nameForm" @submit.prevent="submitForm">
    <header class="header col" v-if="mobile">
      <img
        src="/assets/images/icons/caret.svg"
        class="header__icon"
        @click="$router.go(-1)"
      />
      <h3>Add new group</h3>
      <h6 class="header__stage">1/3 Name</h6>
    </header>
    <div class="icons row">
      <picture
        v-for="(avatar, index) in avatars"
        :class="[
          'icons__item',
          { 'icons__item--selected': currentAvatar === index }
        ]"
        :key="avatar"
        @click="selectAvatar(index)"
      >
        <img
          :src="`/assets/images/avatars/${avatar}-${avatarColor.name}.svg`"
          alt
        />
      </picture>
      <picture class="icons__item">
        <img src="/assets/images/icons/add.svg" alt />
      </picture>
    </div>
    <div class="color row" @click="colorPicker = !colorPicker">
      <div
        class="currentColor"
        :style="{ background: avatarColor.value }"
      ></div>
      <h5>your color</h5>
      <div class="colorPicker row" v-if="colorPicker">
        <div
          class="colorPicker__item"
          v-for="(color, index) of colors.slice(0, 6)"
          :key="color.name"
          :style="{ background: color.value }"
          @click="selectAvatarColor(index)"
        ></div>
      </div>
    </div>
    <input
      type="text"
      placeholder="Type your name"
      v-model.lazy="username"
      required
    />
    <div class="icons row">
      <picture
        v-for="(icon, index) in icons"
        :class="[
          'icons__item',
          { 'icons__item--selected': currentIcon === index },
          'icons__item--round'
        ]"
        :style="{ background: groupColor }"
        :key="icon"
        @click="selectIcon(index)"
      >
        <img :src="`/assets/images/icons/${icon}.svg`" alt />
      </picture>
      <picture class="icons__item">
        <img src="/assets/images/icons/add.svg" alt />
      </picture>
    </div>
    <div class="color row" @click="colorPicker2 = !colorPicker2">
      <!-- <div class="currentColor" :style="{ background: groupColor }"></div> -->
      <h5>your color</h5>
      <!-- <div class="colorPicker" v-if="colorPicker2">
        <div
          class="colorPicker__item"
          v-for="(color, index) of colors"
          :key="color.name"
          :style="{ background: color.value }"
          @click="selectGroupColor(index)"
        ></div>
      </div> -->
      <input type="color" v-model="groupColor" />
    </div>
    <input
      type="text"
      placeholder="Type name of your group"
      v-model.lazy="groupName"
      required
    />
    <button name="submit" class="submit">
      <img src="/assets/images/icons/check.svg" alt />
    </button>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      colors: [
        {
          name: "blue",
          value: "#509df6"
        },
        {
          name: "orange",
          value: "#ef7b69"
        },
        {
          name: "yellow",
          value: "#e39d33"
        },
        {
          name: "violet",
          value: "#9764f6"
        },
        {
          name: "green",
          value: "#5ECB8A"
        },
        {
          name: "pink",
          value: "#E870AE"
        },
        {
          name: "gray",
          value: "#ccc"
        },
        {
          name: "lightPink",
          value: "#efaeae"
        }
      ],
      avatars: [
        "Lady",
        "Man",
        "Man 2",
        "Man angry",
        "Man happy",
        "Man happy 2"
      ],
      icons: [
        "architecture",
        "artists",
        "birthday party",
        "books",
        "break",
        "cars",
        "chess",
        "clear",
        "decorations",
        "dogs",
        "family",
        "flowers",
        "gifts",
        "holidays",
        "home",
        "music",
        "my team",
        "others",
        "outgoings",
        "painting",
        "photography",
        "remember",
        "removal",
        "repairs",
        "school",
        "shopping",
        "space",
        "travel",
        "wedding",
        "writers"
      ],
      colorPicker: false,
      colorPicker2: false,
      currentAvatar: 0,
      currentAvatarColor: 0,
      currentIcon: 0,
      currentIconColor: 0,
      username: "",
      groupName: "",
      groupColor: "#509df6"
    };
  },
  computed: {
    ...mapState({ mobile: state => state.app.mobile }),
    avatarColor() {
      return this.colors[this.currentAvatarColor];
    },
    avatar() {
      return this.avatars[this.currentAvatar];
    },
    icon() {
      return this.icons[this.currentIcon];
    },
    iconColor() {
      return this.colors[this.currentIconColor];
    }
  },
  methods: {
    selectAvatar(index) {
      this.currentAvatar = index;
      this.$store.commit("SETUP_NEW_GROUP", {
        property: "avatar",
        value: this.avatar
      });
    },
    selectAvatarColor(index) {
      this.currentAvatarColor = index;
      this.$store.commit("SETUP_NEW_GROUP", {
        property: "userColor",
        value: this.avatarColor.name
      });
    },
    selectIcon(index) {
      this.currentIcon = index;
      this.$store.commit("SETUP_NEW_GROUP", {
        property: "icon",
        value: this.icon
      });
    },
    selectGroupColor(index) {
      this.$store.commit("SETUP_NEW_GROUP", {
        property: "color",
        value: this.groupColor
      });
    },
    submitForm() {
      if (this.username.length && this.groupName.length) {
        this.selectAvatar(this.currentAvatar);
        this.selectAvatarColor(this.currentAvatarColor);
        this.selectIcon(this.currentIcon);
        this.selectGroupColor(this.currentIconColor);
        eventBus.$emit("stage-1");
      }
    }
  },
  watch: {
    username(n) {
      this.$store.commit("SETUP_NEW_GROUP", { property: "username", value: n });
    },
    groupName(n) {
      this.$store.commit("SETUP_NEW_GROUP", {
        property: "groupName",
        value: n
      });
    }
  },
  mounted() {
    this.selectAvatar(this.currentAvatar);
    this.selectAvatarColor(this.currentAvatarColor);
    this.selectIcon(this.currentIcon);
    this.selectGroupColor(this.groupColor);
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
}
.icons {
  justify-content: flex-start;
  align-items: center;
  margin: 20px auto;
  width: 70%;
  min-width: 300px;
  flex-wrap: wrap;

  &__item {
    @media (min-width: 900px) {
      height: 45px;
      width: 45px;
    }
    cursor: pointer;
    display: flex;
    margin: 6px;
    transition: transform 0.3s ease;
    height: 30px;
    width: 30px;

    &--blue {
      background: #509df6;
    }
    &--gray {
      background: #cccccc;
    }
    &--violet {
      background: #9664ff;
    }
    &--pink {
      background: #e870ae;
    }
    &--lightPink {
      background: #efaeae;
    }
    &--yellow {
      background: #e39d33;
    }
    &--orange {
      background: #ef7b69;
    }
    &--green {
      background: #5ecb8a;
    }

    &--round {
      @media (min-width: 900px) {
        width: 45px;
        height: 45px;
        padding: 10px;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      padding: 7px;
    }

    & img {
      width: 100%;
    }

    &--selected {
      position: relative;
      transform: scale(1.3);

      // &::after {
      //   content: 'Your avatar';
      //   position: absolute;
      //   top: 100%;
      //   left: 50%;
      //   transform-origin: 50% 50%;
      //   transform: translateX(-50%);
      //   width: 100%;
      //   display: flex;
      //   color: #000;
      //   font-size: 10px;
      //   text-align: center;
      // }
    }
  }
}
.currentColor {
  border-radius: 50%;
  height: 15px;
  width: 15px;
  margin: 10px;
}
.color {
  margin: 20px auto;
  cursor: pointer;
  align-items: center;
  position: relative;
  width: 70%;

  & input[type="color"] {
    margin-left: 10px;
  }
}
.colorPicker {
  display: grid;
  grid-template-columns: repeat(4, 50px);
  position: absolute;
  border: 1px solid #f2f2f2;
  top: 100%;
  left: 0;
  background: #fff;
  z-index: 2;

  &__item {
    @extend .currentColor;
    height: 30px;
    width: 30px;
    margin: 5px auto;
  }
}
</style>

<template>
  <form class="configuration col" @submit.prevent="submitForm">
    <header class="header col" v-if="mobile">
      <h6 class="header__stage">2/3 Configuration</h6>
    </header>
    <h4 class="configuration__title">User ability</h4>
    <div class="configuration__options">
      <div class="row">
        <slider :checked="true"></slider>
        <p>Open only with link</p>
      </div>
      <div class="row">
        <slider></slider>
        <p>Need password to open link</p>
      </div>
      <div class="row">
        <slider></slider>
        <p>Let people read</p>
      </div>
      <div class="row">
        <slider></slider>
        <p>Let people write</p>
      </div>
      <div class="row">
        <slider></slider>
        <p>Let people add attachments</p>
      </div>
      <div class="row">
        <slider></slider>
        <p>Let people add emotions</p>
      </div>
      <div class="row">
        <label class="switch">
          <input
            type="checkbox"
            :checked="userAbility.chat"
            @click="userAbilityChange('chat')"
          />
          <span class="slider round"></span>
        </label>
        <p>Create chat</p>
      </div>
    </div>
    <h4 class="configuration__title">Reactions</h4>
    <div class="icons row">
      <picture
        v-for="(reaction, index) of reactions"
        :class="['icons__item', { 'icons__item--selected': reaction.selected }]"
        :key="index"
        @click="reaction.selected = !reaction.selected"
      >
        <img :src="`/assets/images/icons/like-${reaction.name}.svg`" alt />
      </picture>
      <picture class="icons__item">
        <img src="/assets/images/icons/add.svg" alt />
      </picture>
    </div>
    <button name="submit" class="submit">
      <img src="/assets/images/icons/check.svg" alt />
    </button>
  </form>
</template>

<script>
import { mapState } from "vuex";
import slider from "./slider.vue";

export default {
  components: {
    slider
  },
  data() {
    return {
      userAbility: {
        chat: false
      },
      reactions: [
        { name: "heart", selected: false },
        { name: "hand", selected: false },
        { name: "glasses", selected: false },
        // { name: "facepalm", selected: false },
        // { name: "fistBump", selected: false },
        { name: "paw", selected: false },
        { name: "sad", selected: false },
        { name: "smile", selected: false }
      ]
    };
  },
  computed: {
    ...mapState({ mobile: state => state.app.mobile })
  },
  methods: {
    userAbilityChange(input) {
      this.userAbility[input] = !this.userAbility[input];
      this.$store.commit("CHANGE_USER_ABILITY", this.userAbility);
    },
    submitForm() {
      this.$store.commit("CHANGE_USER_ABILITY", this.userAbility);
      this.$store.commit("SETUP_NEW_GROUP", {
        property: "reactions",
        value: this.reactions
          .map(el => {
            if (el.selected) {
              return el.name;
            }
          })
          .filter(el => el !== undefined)
      });
      eventBus.$emit("stage-2");
    }
  }
};
</script>

<style lang="scss" scoped>
.configuration {
  display: flex;
  width: 100%;
  justify-content: flex-start;

  &__title {
    margin: 10px 20px;
  }

  &__options {
    width: 70%;
    margin: 10px auto;
    min-width: 300px;
  }
}

.icons {
  @media (min-width: 900px) {
    justify-content: space-between;
  }
  justify-content: flex-start;
  align-items: center;
  margin: 20px auto;
  width: 70%;
  min-width: 300px;
  flex-wrap: wrap;

  &__item {
    @media (min-width: 900px) {
      width: 45px;
      height: 45px;
      margin: 6px 14px;
    }
    cursor: pointer;
    display: flex;
    margin: 6px 10px;
    transition: transform 0.3s ease;
    height: 30px;
    width: 30px;

    & img {
      width: 100%;
    }

    &--selected {
      position: relative;
      transform: scale(1.6);
    }
  }
}
.row {
  align-items: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  transform: scale(0.5);
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

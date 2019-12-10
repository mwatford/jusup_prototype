<template>
  <form class="addGroup row" @submit.prevent="createGroup">
    <div class="col">
      <h1 v-if="!mobile">Create a group</h1>
      <component :is="currentComponent"></component>
      <!-- <div class="addGroup__buttons" v-if="!mobile">
        <button class="button">Back</button>
        <button class="button">Next</button>
      </div>-->
    </div>
    <h4 class="progress" v-if="!mobile">
      <h4
        :class="['progress__stage', { 'progress__stage--active': step === 0 }]"
      >
        Name
      </h4>
      <h4
        :class="['progress__stage', { 'progress__stage--active': step === 1 }]"
      >
        Configuration
      </h4>
      <h4
        :class="['progress__stage', { 'progress__stage--active': step === 2 }]"
      >
        Add people
      </h4>
      <!-- <button class="progress__button button" v-show="step === 2">Create</button> -->
    </h4>
  </form>
</template>

<script>
import { mapState } from "vuex";
import AddGroupName from "../components/Add-group-name.vue";
import AddGroupConfiguration from "../components/Add-group-configuration.vue";
import AddGroupPeople from "../components/Add-group-people.vue";

export default {
  components: {
    "add-group-name": AddGroupName,
    "add-group-configuration": AddGroupConfiguration,
    "add-group-people": AddGroupPeople
  },
  data() {
    return {
      steps: {
        stage1: false,
        stage2: false,
        stage3: false
      },
      formComponents: [AddGroupName, AddGroupConfiguration, AddGroupPeople],
      step: 0
    };
  },
  computed: {
    ...mapState({
      mobile: state => state.app.mobile
    }),
    stepsValues() {
      return Object.values(this.steps);
    },
    validation() {
      if (this.stepsValues.every(el => el === true)) {
        return true;
      } else return false;
    },
    currentComponent() {
      return this.formComponents[this.step];
    }
  },
  methods: {
    createGroup() {
      if (this.validation) {
        this.$store.commit("ADD_NEW_GROUP");
        this.$router.push({ path: "/" });
      }
    }
  },
  mounted() {
    eventBus.$on("stage-1", () => {
      this.steps.stage1 = true;
      this.step++;
    });
    eventBus.$on("stage-2", () => {
      this.steps.stage2 = true;
      this.step++;
    });
    eventBus.$on("stage-3", () => {
      this.steps.stage3 = true;
      this.createGroup();
    });
  }
};
</script>

<style lang="scss">
.addGroup input[type="text"] {
  border: none;
  border-bottom: 2px solid #f2f2f2;
  height: 30px;
  width: 70%;
  margin: 20px auto;
  padding: 4px;
  outline: none;

  &:focus {
    border: none;
    border-bottom: 2px solid #509df6;
  }
}
.addGroup .submit {
  display: flex;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  border: none;
  background: none;
  align-self: flex-end;
  margin: 40px;
}
.addGroup > .col {
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  overflow-y: auto;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  background: #509df6;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  width: 70px;
  height: 35px;
  outline: none;
}
.progress {
  position: relative;
  width: 25%;
  height: 100%;
  max-width: 300px;
  background: #509df6;
  justify-content: flex-end;
  padding: 0 0 80px 20px;
  color: #fff;
  display: flex;
  flex-direction: column;

  &__button {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }

  &__stage {
    font-size: 16px;
    margin: 8px 0;

    &--active {
      font-weight: bold;
      margin-left: 10px;
    }
  }
}
.addGroup {
  // position: absolute;
  background: #fff;
  // height: 100%;
  width: 100%;
  align-items: flex-start;
  z-index: 15;
  height: 100%;

  &__buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 20px 20px 20px;
  }

  h1 {
    margin: 30px 0 30px 30px;
    color: #a3a3a3;
  }

  & .header {
    @media (min-width: 900px) {
      background: none;
    }
    background: #f1f1f1;
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;

    h3 {
      margin: 10px 0;
      font-weight: normal;
      font-size: 16px;
    }

    &__icon {
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
    }

    &__stage {
      font-weight: normal;
      align-self: flex-end;
      margin: 10px 20px 10px 0;
      font-size: 13px;
    }
  }
}
</style>

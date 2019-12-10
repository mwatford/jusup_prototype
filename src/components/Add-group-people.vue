<template>
  <form class="addPeople col" @submit.prevent="submitForm">
    <header class="header col" v-if="mobile">
      <h6 class="header__stage">3/3 Add People</h6>
    </header>
    <div class="col">
      <input type="text" placeholder="Invite someone" v-model="search" />
      <ul class="suggestions">
        <li
          v-for="(item, index) in filteredUsers"
          :key="index"
          class="row"
          @click="addMember(item)"
        >
          <picture>
            <img :src="item.avatar" alt />
          </picture>
          <h4>{{ item.name }}</h4>
        </li>
      </ul>
    </div>
    <ul class="members">
      <li v-for="(member, index) in members" :key="index" class="row center">
        <div class="row center">
          <img :src="member.avatar" />
          <h4>{{ member.name }}</h4>
        </div>
        <select>
          <option>Can read</option>
          <option>Can read and write</option>
        </select>
      </li>
    </ul>
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
      search: "",
      members: [],
      users: Object.assign([], this.$store.state.users)
    };
  },
  computed: {
    ...mapState({
      mobile: state => state.app.mobile
    }),
    filteredUsers() {
      if (this.search) {
        return this.users.filter(user => {
          if (
            user.name.toLowerCase().match(this.search.toLowerCase()) &&
            user.name[0] === this.search[0].toUpperCase()
          ) {
            return user;
          }
        });
      } else return null;
    }
  },
  methods: {
    submitForm() {
      this.$store.commit("SETUP_NEW_GROUP", {
        property: "members",
        value: this.members
      });
      window.eventBus.$emit("stage-3");
    },
    addMember(member) {
      const index = this.users.indexOf(member);
      this.users.splice(index, 1);
      this.members.push(member);
    }
  }
};
</script>

<style lang="scss" scoped>
.addPeople {
  width: 100%;
  margin: 0 0 50px 0;
  justify-content: flex-start;
}
form > .col {
  position: relative;
  justify-content: center;
  align-items: center;
}
.suggestions {
  position: absolute;
  background: #fff;
  top: 100%;
  width: 70%;

  li {
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      margin-right: 5px;
    }
  }
}
.members {
  margin-top: 150px;
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 70%;
  list-style-type: none;

  li {
    margin: 5px 0;
    justify-content: space-between;

    img {
      @media (min-width: 900px) {
        width: 45px;
      }
      margin-right: 5px;
      width: 30px;
    }

    select {
      border: none;
      background: white;
    }
  }
}
</style>

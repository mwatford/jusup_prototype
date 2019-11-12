<template>
  <div class="chat">
    <header class="header row" @click="expanded = !expanded">
      <picture :class="[`header__icon--${group.color}`, 'header__icon']">
        <img :src="group.icon" />
      </picture>
      <div class="col">
        <h4
          class="header__group"
        >{{ group.name.replace(group.name[0], group.name[0].toUpperCase()) }}</h4>
        <h6 v-if="chat.messages.length">{{ chat.messages[chat.messages.length - 1].author }}</h6>
        <h6 v-else>{{ group.admin }}</h6>
      </div>
    </header>
    <main class="content col" v-if="expanded">
      <div class="messages" v-chat-scroll>
        <div v-if="!chat.messages.length" class="message">Start a conversation</div>
        <div class="message" v-for="(message, index) in chat.messages" :key="index">
          <div class="row">
            <img :src="getAvatar(message.author)" />
            <h6>{{ message.author }}</h6>
          </div>
          <p :class="['message__text', `message__text--${group.color}`]">{{ message.text }}</p>
        </div>
      </div>
      <form class="row" @submit.prevent="send">
        <input type="text" v-model="message.text" placeholder="type your message..." />
        <button type="submit" value="SEND" class="send">
          <img src="/assets/images/icons/caret.svg" class="rotate-180" />
        </button>
      </form>
      <div class="members col">
        <h6>members:</h6>
        <div class="row" v-for="member in group.members" :key="member.name">
          <img :src="member.avatar" />
          <h6>{{ member.name }}</h6>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      expanded: false,
      message: {
        author: this.group.user,
        text: ""
      }
    };
  },
  computed: {
    chat() {
      return this.group.chat;
    }
    // group() {
    //   return this.group
    // }
  },
  methods: {
    getAvatar(author) {
      const user = this.group.members.find(el => el.name === author);
      return user.avatar;
    },
    send() {
      if (this.message.text.length) {
        const message = Object.assign({}, this.message);
        this.$store.commit("CHAT_MESSAGE", {
          message,
          group: this.group
        });
        this.message.text = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
}
.header {
  cursor: pointer;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid #d6d6d6;

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    padding: 12px;
    margin-right: 5px;

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

    & img {
      width: 100%;
    }
  }
}
.content {
  border-bottom: 1px solid #d6d6d6;
  align-items: center;
  width: 100%;
}
.messages {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 250px;
  width: 80%;
  overflow-y: auto;
  margin: 2px 0 20px 0;
}
form.row {
  width: 75%;
  min-height: 30px;
  align-items: center;
  margin-bottom: 20px;
}
input {
  width: 100%;
  padding: 5px 3px;
  border: none;
  border-bottom: 2px solid #f2f2f2;
  outline: none;

  &:focus {
    border: none;
    border-bottom: 2px solid #509df6;
  }
}
.send {
  cursor: pointer;
  width: 10%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f2f2f2;
  border-radius: 3px;
  background: #fff;

  &:active {
    background: #f2f2f2;
  }
}

.message {
  margin-top: 20px;
  width: 100%;

  & .row {
    margin: 5px 0;
    align-items: center;

    & img {
      margin-right: 5px;
      height: 25px;
    }
  }

  &__text {
    padding: 15px;
    margin: 10px;
    background: #fed;
    border-radius: 4px;
    word-wrap: break-word;

    &--violet {
      background: #ccb2fd;
    }

    &--orange {
      background: #fcc2b9;
    }

    &--yellow {
      background: #fed;
    }

    &--blue {
      background: #b1d5ff;
    }

    &--gray {
      background: #f3f3f3;
    }

    &--pink {
      background: #e5b4fc;
    }

    &--lightPink {
      background: #ffdada;
    }

    &--green {
      background: #bef7d5;
    }
  }
}
.members {
  margin: 20px 0;
  width: 80%;
  align-items: flex-start;

  & h6 {
    font-size: 14px;
  }

  & .row {
    margin: 5px 0;
    align-items: center;

    & img {
      margin-right: 5px;
      height: 25px;
    }
  }
}
</style>
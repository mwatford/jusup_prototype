import Groups from "../components/Groups.vue";
import Desk from "../components/Desk.vue";
import Chats from "../components/Chats.vue";
import Alerts from "../components/Alerts.vue";
import AddGroup from "../views/Add-group.vue";
import groups from "../scripts/groups.js";
import posts from "../scripts/posts.js";
import users from "../scripts/users.js";
import alerts from "../scripts/alerts.js";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const createNewGroup = () => {
  return {
    admin: null,
    avatar: null,
    username: null,
    userColor: null,
    icon: null,
    color: null,
    groupName: null,
    userAbility: {
      chat: false
    },
    reactions: [],
    members: []
  };
};

export const store = new Vuex.Store({
  state: {
    app: {
      mobile: false,
      break: 900
    },
    tabs: [
      {
        name: "groups",
        component: Groups
      },
      {
        name: "chats",
        component: Chats
      },
      {
        name: "desk",
        component: Desk
      },
      {
        name: "alerts",
        component: Alerts
      },
      {
        name: "add-group",
        component: AddGroup
      }
    ],
    alerts,
    users,
    posts,
    groups,
    newGroup: createNewGroup()
  },
  mutations: {
    TOGGLE_GROUP(state, name) {
      state.groups.find(group => {
        if (group.name === name) {
          group.active = !group.active;
        }
      });
    },
    TOGGLE_MOBILE(state, val) {
      state.app.mobile = val;
    },
    CHAT_MESSAGE(state, { message, group }) {
      state.groups.find(el => {
        if (el.name === group.name) {
          el.chat.messages.push(message);
        }
      });
    },
    SETUP_NEW_GROUP(state, { property, value }) {
      state.newGroup[property] = value;
    },
    CHANGE_USER_ABILITY(state, data) {
      Object.assign(state.newGroup.userAbility, data);
    },
    ADD_NEW_GROUP(state) {
      let data = state.newGroup;
      let user = Object.assign(
        {},
        {
          name: data.username,
          avatar: `/assets/images/avatars/${data.avatar}-${data.userColor}.svg`
        }
      );
      data.members.push(user);
      state.groups.push({
        name: data.groupName,
        color: data.color,
        icon: `/assets/images/icons/${data.icon}.svg`,
        active: false,
        members: data.members,
        user: data.username,
        admin: data.admin !== null ? data.admin : data.username,
        chat: data.userAbility.chat === true ? { messages: [] } : null,
        reactions: data.reactions ? data.reactions : null,
        posts: []
      });
      state.newGroup = createNewGroup();
    },
    ADD_NEW_POST(state, post) {
      post.id = state.posts.length;
      state.posts.unshift(post);
    },
    POST_SIZE(state, { val, id }) {
      state.posts.find(post => post.id === id).size = val;
    },
    DELETE_ALERT(state, index) {
      state.alerts.splice(index, 1);
    },
    CLEAR_SELECTED_GROUPS(state) {
      state.groups
        .filter(el => el.active)
        .forEach(el => {
          el.active = false;
        });
    },
    CHANGE_GROUP_SIZE(state, { size, group }) {
      state.groups.find(el => el.name === group).size = size;
    },
    REACT(state, { name, id }) {
      const liked = state.posts
        .find(el => el.id === id)
        .reactions.find(el => el.name === name).liked;

      let value;

      liked ? (value = -1) : (value = 1);

      state.posts
        .find(el => el.id === id)
        .reactions.find(el => el.name === name).amount += value;

      state.posts
        .find(el => el.id === id)
        .reactions.find(el => el.name === name).liked = !liked;
    }
  }
});

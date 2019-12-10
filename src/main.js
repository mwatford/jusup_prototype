import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./router/router.js";
import { store } from "./store/store.js";
import VueChatScroll from "vue-chat-scroll";
import "./scripts/capitalize";
import baseIcon from "./components/baseIcon.vue";

Vue.config.productionTip = false;

window.eventBus = new Vue();

Vue.component("base-icon", baseIcon);

Vue.use(VueRouter);
Vue.use(VueChatScroll);

const router = new VueRouter({
  routes
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

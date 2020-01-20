import Main from "../views/Main.vue";
import addGroup from "../views/Add-group.vue";
import Options from "../views/Options.vue";

export const routes = [
  { path: "/", component: Main, name: "main" },
  { path: "/options", component: Options, name: "options" },
  { path: "/add-group", component: addGroup, name: "add-group" }
];

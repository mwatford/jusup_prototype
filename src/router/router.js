import Main from "../views/Main.vue";
import addGroup from "../views/Add-group.vue";

export const routes = [
  { path: "/", component: Main, name: "main" },
  { path: "/add-group", component: addGroup, name: "add-group" }
];

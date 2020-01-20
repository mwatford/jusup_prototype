import Main from "../views/Main.vue";
import addGroup from "../views/Add-group.vue";
import Navigation from "../views/Navigation.vue";

export const routes = [
  { path: "/", component: Main, name: "main" },
  { path: "/navigation", component: Navigation, name: "navigation" },
  { path: "/add-group", component: addGroup, name: "add-group" }
];

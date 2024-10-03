import Vue from "vue";
import Router from "vue-router";

import MyPortfolio from "./components/MyPortfolio.vue";
import ShoppingList from "./components/ShoppingList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
        path: "/",
        name: "my-portfolio",
        component: MyPortfolio,
    },
    {
      path: "/shopping",
      name: "shopping",
      component: ShoppingList,
    },
  ],
});

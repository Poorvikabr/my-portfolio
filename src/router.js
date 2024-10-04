import Vue from "vue";
import Router from "vue-router";

import MyPortfolio from "./components/MyPortfolio.vue";
import ShoppingList from "./components/ShoppingList.vue";
import CheckOut from "./components/CheckOut.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
        path: "/",
        name: "my-portfolio",
        component: MyPortfolio,
        // redirect:"/shopping"
      
    },
    {
      path: "/shopping",
      name: "shopping",
      component: ShoppingList,
    },
    {
      path: "/checkout",
      name: "check-out",
      component: CheckOut,
    },
  ],
});

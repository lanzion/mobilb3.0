import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        index: 0,
        initialSlide: 0,
        loadname: "home",
        name: "home",
        HompPage: true,
      }
    }
  ]
});

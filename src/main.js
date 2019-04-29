import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/reset.css";
import "./assets/script/rem.js";

import Loading from './components/loading/index.js';
Vue.use(Loading);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

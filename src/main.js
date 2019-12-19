import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//TODO improve fontawesome import
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./assets/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

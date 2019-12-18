import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// TODO improve bulma import to be able to customize it
import "bulma/css/bulma.min.css";

//TODO improve fontawesome import
import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

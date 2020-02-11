import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./filters";
import "./plugins/fontawesome";
import "./plugins/dateformat";
import "./assets/tailwind.css";

Vue.config.productionTip = false;

if (process.env.NODE_ENV === "development") {
  window.setStep = function(stepName) {
    store.commit("clear");
    store.dispatch("loadFromStep", stepName);
  };
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

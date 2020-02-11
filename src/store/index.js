import Vue from "vue";
import Vuex from "vuex";

import mails from "./modules/mails.js";

Vue.use(Vuex);

const isDebug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  strict: isDebug,
  modules: {
    mails
  }
});

// persist mails in localStorage
store.subscribe((mutation, state) => {
  localStorage.setItem("mails-received", JSON.stringify(state.mails.received));
  localStorage.setItem("mails-sent", JSON.stringify(state.mails.sent));
  localStorage.setItem("mails-spam", JSON.stringify(state.mails.spam));
  localStorage.setItem("mails-trash", JSON.stringify(state.mails.trash));
});

export default store;

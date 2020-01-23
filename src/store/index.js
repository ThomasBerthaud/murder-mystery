import Vue from "vue";
import Vuex from "vuex";

import mails from "./modules/mails.js";

Vue.use(Vuex);

const isDebug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  strict: isDebug,
  modules: {
    mails
  }
});

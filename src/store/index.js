import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mails: {
      received: [
        { id: "1", title: "Nouvelle Mission", content: "lorem ipsum" },
        { id: "2", title: "Petit déjeuner", content: "super mail de test" }
      ],
      sent: [],
      spam: [],
      trash: []
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});

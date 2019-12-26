import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mails: {
      received: [
        { id: "1", title: "Nouvelle Mission", content: "lorem ipsum", from: "boss", time: "0" },
        { id: "2", title: "Petit déjeuner", content: "super mail de test" },
        { id: "3", title: "Petit déjeuner", content: "super mail de test" },
        { id: "4", title: "Petit déjeuner", content: "super mail de test" },
        { id: "5", title: "Petit déjeuner", content: "super mail de test" },
        { id: "6", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" },
        { id: "7", title: "Petit déjeuner", content: "super mail de test" }
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

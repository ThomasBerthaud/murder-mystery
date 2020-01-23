const getFromLocalStorage = itemName => JSON.parse(localStorage.getItem(itemName)) || [];

const state = {
  received: getFromLocalStorage("mails-received"),
  sent: getFromLocalStorage("mails-sent"),
  spam: getFromLocalStorage("mails-spam"),
  trash: getFromLocalStorage("mails-trash")
};

const getters = {};

const actions = {
  loadMailsFromStep({ commit }, step) {
    setTimeout(() => {
      const mailsFromStep = require(`@/assets/mails/${step}.json`);
      for (let [type, mails] of Object.entries(mailsFromStep)) {
        commit("add", { type, mails });
      }
    }, 200);
  }
};

const mutations = {
  add(state, { type, mails }) {
    state[type] = [...mails, ...state[type]];
    localStorage.setItem(`mails-${type}`, JSON.stringify(state[type]));
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

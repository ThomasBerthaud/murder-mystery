const getFromLocalStorage = itemName => JSON.parse(localStorage.getItem(itemName)) || [];

const state = {
  received: getFromLocalStorage("mails-received"),
  sent: getFromLocalStorage("mails-sent"),
  spam: getFromLocalStorage("mails-spam"),
  trash: getFromLocalStorage("mails-trash")
};

const getters = {
  nbUnreadMails(state) {
    return state.received.filter(mail => !mail.seen).length;
  }
};

const actions = {
  loadFromStep({ commit }, step) {
    setTimeout(() => {
      // TODO: extract require inside service to facilitate tests
      const mailsFromStep = require(`@/assets/mails/${step}.js`);
      for (let [mailCategory, mails] of Object.entries(mailsFromStep)) {
        commit("add", { mailCategory, mails });
      }
    }, 200);
  }
};

const mutations = {
  clear(state) {
    state.received = [];
    state.sent = [];
    state.spam = [];
    state.trash = [];
  },
  add(state, { mailCategory, mails }) {
    state[mailCategory] = [...mails, ...state[mailCategory]];
  },
  setAsRead(state, { mail, mailCategory }) {
    state[mailCategory] = state[mailCategory].map(storedMail => {
      if (storedMail.id === mail.id) {
        storedMail.seen = true;
      }
      return storedMail;
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

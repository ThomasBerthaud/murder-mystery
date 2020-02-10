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
      const mailsFromStep = require(`@/assets/mails/${step}.json`);
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
    localStorage.clear();
  },
  add(state, { mailCategory, mails }) {
    state[mailCategory] = [...mails, ...state[mailCategory]];
    localStorage.setItem(`mails-${mailCategory}`, JSON.stringify(state[mailCategory]));
  },
  setAsRead(state, { mail, mailCategory }) {
    state[mailCategory] = state[mailCategory].map(storedMail => {
      if (storedMail.id === mail.id) {
        storedMail.seen = true;
      }
      return storedMail;
    });
    localStorage.setItem(`mails-${mailCategory}`, JSON.stringify(state[mailCategory]));
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

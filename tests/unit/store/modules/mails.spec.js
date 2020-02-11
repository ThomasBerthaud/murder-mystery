import mailsStore from "@/store/modules/mails.js";

jest.useFakeTimers();

describe("mails vuex store module", () => {
  it("should clear mails", () => {
    // GIVEN
    const state = { received: [{ id: 1 }], sent: [{ id: 2 }], spam: [{ id: 3 }], trash: [{ id: 4 }] };

    // WHEN
    mailsStore.mutations.clear(state);

    // THEN
    expect(state).toEqual({ received: [], sent: [], spam: [], trash: [] });
  });
  it("should add mails to state", () => {
    // GIVEN
    const state = { received: [{ id: 1 }] };
    const newMails = { mailCategory: "received", mails: [{ id: 2 }] };

    // WHEN
    mailsStore.mutations.add(state, newMails);

    // THEN
    expect(state.received).toEqual([{ id: 2 }, { id: 1 }]);
  });

  it("should retrieve a list of mails from assets and commit them", () => {
    // GIVEN
    const commit = jest.fn();
    jest.mock("@/assets/mails/introduction.js", () => ({
      received: [{ id: "received1" }],
      spam: [{ id: "spam1" }]
    }));

    // WHEN
    mailsStore.actions.loadFromStep({ commit }, "introduction");
    jest.runAllTimers();

    // THEN
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 200);
    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith("add", { mailCategory: "received", mails: [{ id: "received1" }] });
    expect(commit).toHaveBeenCalledWith("add", { mailCategory: "spam", mails: [{ id: "spam1" }] });
  });

  it("should mark mail as read", () => {
    // GIVEN
    const state = { received: [{ id: 1, seen: true }, { id: 2 }] };
    const mailToRead = { id: 2 };

    // WHEN
    mailsStore.mutations.setAsRead(state, { mail: mailToRead, mailCategory: "received" });

    // THEN
    expect(state.received).toEqual([
      { id: 1, seen: true },
      { id: 2, seen: true }
    ]);
  });

  it("should get number of unread mails in received box", () => {
    // GIVEN
    const state = { received: [{ seen: false }, { seen: true }, {}] };

    // WHHEN
    const nbUnreadMails = mailsStore.getters.nbUnreadMails(state);

    // THEN
    expect(nbUnreadMails).toBe(2);
  });
});

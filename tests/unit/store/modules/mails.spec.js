import mailsStore from "@/store/modules/mails.js";

jest.useFakeTimers();

describe("mails vuex store module", () => {
  it("should add mails to state", () => {
    // GIVEN
    const state = { received: [{ id: 1 }] };
    const newMails = { type: "received", mails: [{ id: 2 }] };

    // WHEN
    mailsStore.mutations.add(state, newMails);

    // THEN
    expect(state.received).toEqual([{ id: 2 }, { id: 1 }]);
    expect(localStorage.setItem).toHaveBeenCalledWith("mails-received", JSON.stringify([{ id: 2 }, { id: 1 }]));
  });

  it("should retrieve a list of mails from assets and commit them", () => {
    // GIVEN
    const commit = jest.fn();
    jest.mock("@/assets/mails/introduction.json", () => ({
      received: [{ id: "received1" }],
      spam: [{ id: "spam1" }]
    }));

    // WHEN
    mailsStore.actions.loadMailsFromStep({ commit }, "introduction");
    jest.runAllTimers();

    // THEN
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 200);
    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith("add", { type: "received", mails: [{ id: "received1" }] });
    expect(commit).toHaveBeenCalledWith("add", { type: "spam", mails: [{ id: "spam1" }] });
  });
});

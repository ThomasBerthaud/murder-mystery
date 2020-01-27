import parseDate from "@/filters/parseDate";

describe("parseDate filter", () => {
  it("should return a formatted date in the past, starting from startTime", () => {
    // GIVEN
    localStorage.setItem("startTime", "Thu Jan 23 2020 22:41:32 GMT+0100 (heure normale d’Europe centrale)");

    // WHEN
    const pastDate = parseDate({ year: 1, month: 1, date: 1 });

    // THEN
    expect(pastDate).toEqual("Samedi 22 Dec 2018 - 22:41");
  });

  it("should return a short date", () => {
    // GIVEN
    localStorage.setItem("startTime", "Thu Jan 23 2020 22:41:32 GMT+0100 (heure normale d’Europe centrale)");

    // WHEN
    const pastDate = parseDate({ year: 1, month: 1, date: 1 }, "short");

    // THEN
    expect(pastDate).toEqual("22/12/2018");
  });
});

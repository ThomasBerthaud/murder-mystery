import parseDate from "@/filters/parseDate";

describe("parseDate filter", () => {
  it("should return return a formatted date in the past, starting from startTime", () => {
    // GIVEN
    localStorage.setItem("startTime", new Date(2019, 10, 9));

    // WHEN
    const pastDate = parseDate({ year: 1, month: 1, date: 1 });

    // THEN
    expect(pastDate).toEqual(new Date(2018, 9, 8).toDateString());
  });
});

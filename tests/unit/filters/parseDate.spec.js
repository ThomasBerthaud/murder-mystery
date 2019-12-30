import parseDate from "@/filters/parseDate";

describe("parseDate filter", () => {
  it("should return return a formatted date in the past, starting from startTime", () => {
    Object.defineProperty(window, "localStorage", {
      value: { getItem: jest.fn().mockReturnValue(new Date(2019, 10, 9).toString()) }
    });
    const pastDate = parseDate({ year: 1, month: 1, date: 1 });
    expect(pastDate).toEqual(new Date(2018, 9, 8).toDateString());
  });
});

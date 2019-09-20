require("../src/data.js");

describe("function filter", () => {
  it("is a function", () => {
    expect(typeof app.filterData).toBe("function");
  });

  it("filter species", () => {
    expect(app.filterData(,,)).toEqual([{}]);
  });
});

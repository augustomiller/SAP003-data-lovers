require("../src/data.js");

describe("function filter", () => {
  it("is a function", () => {
    expect(typeof app.filterData).toBe("function");
  });
});

it("filter species", () => {
  expect(
    app.filterData(
      [
        { name: "Rick Sanchez", species: "Human" },
        { name: "Morty Smith", species: "Human" },
        { name: "Abadango Cluster Princess", species: "Alien" },
        { name: "Abradolf Lincler", species: "Human" },
        { name: "Alien Googah", species: "Alien" }
      ],
      "Human",
      "species"
    )
  ).toEqual([
    { name: "Rick Sanchez", species: "Human" },
    { name: "Morty Smith", species: "Human" },
    { name: "Abradolf Lincler", species: "Human" }
  ]);
});

it("filter gender", () => {
  expect(
    app.filterData(
      [
        { name: "Rick Sanchez", gender: "Male" },
        { name: "Morty Smith", gender: "Male" },
        { name: "Abadango Cluster Princess", gender: "Female" },
        { name: "Abradolf Lincler", gender: "Male" },
        { name: "Alien Googah", gender: "unknown" }
      ],
      "Male",
      "gender"
    )
  ).toEqual([
    { name: "Rick Sanchez", gender: "Male" },
    { name: "Morty Smith", gender: "Male" },
    { name: "Abradolf Lincler", gender: "Male" }
  ]);
});

it("filter status", () => {
  expect(
    app.filterData(
      [
        { name: "Rick Sanchez", status: "Alive" },
        { name: "Morty Smith", status: "Alive" },
        { name: "Abadango Cluster Princess", status: "Alive" },
        { name: "Abradolf Lincler", status: "unknown" },
        { name: "Alien Googah", status: "unknown" }
      ],
      "Alive",
      "status"
    )
  ).toEqual([
    { name: "Rick Sanchez", status: "Alive" },
    { name: "Morty Smith", status: "Alive" },
    { name: "Abadango Cluster Princess", status: "Alive" }
  ]);
});

it("ordenarNomes", () => {
  expect(
    app.selectOrderAlpha("A-Z", [
      { name: "Rick Sanchez" },
      { name: "Morty Smith" },
      { name: "Abradolf Lincler" }
    ])
  ).toEqual([
    { name: "Abradolf Lincler" },
    { name: "Morty Smith" },
    { name: "Rick Sanchez" }
  ]);
});

it("desordenarNomes", () => {
  expect(
    app.selectOrderAlpha("Z-A", [
      { name: "Abradolf Lincler" },
      { name: "Morty Smith" },
      { name: "Rick Sanchez" }
    ])
  ).toEqual([
    { name: "Rick Sanchez" },
    { name: "Morty Smith" },
    { name: "Abradolf Lincler" }
  ]);
});

require("../src/data.js");

describe("function filter", () => {
  it("is a function", () => {
    expect(typeof app.filterData).toBe("function");
  });
});

it("filter species", () => {
  expect(app.filterData([
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)"
      },
      location: {
        name: "Earth (Replacement Dimension)"
      },
      image: "https://placekitten.com/300/300"
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)"
      },
      location: {
        name: "Earth (Replacement Dimension)"
      },
      image: "https://placekitten.com/300/300"
    },
    {
      id: 6,
      name: "Abadango Cluster Princess",
      status: "Alive",
      species: "Alien",
      gender: "Female",
      origin: {
        name: "Abadango"
      },
      location: {
        name: "Abadango"
      },
      image: "https://placekitten.com/300/300"
    },
    {
      id: 7,
      name: "Abradolf Lincler",
      status: "unknown",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)"
      },
      location: {
        name: "Testicle Monster Dimension"
      },
      image: "https://placekitten.com/300/300"
    },
    {
      id: 13,
      name: "Alien Googah",
      status: "unknown",
      species: "Alien",
      gender: "unknown",
      origin: {
        name: "unknown"
      },
      location: {
        name: "Earth (Replacement Dimension)"
      },
      image: "https://placekitten.com/300/300"
    }
  ], "Human", "species")).toEqual([
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)"
      },
      location: {
        name: "Earth (Replacement Dimension)"
      },
      image: "https://placekitten.com/300/300"
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)"
      },
      location: {
        name: "Earth (Replacement Dimension)"
      },
      image: "https://placekitten.com/300/300"
    },
    {
      id: 7,
      name: "Abradolf Lincler",
      status: "unknown",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)"
      },
      location: {
        name: "Testicle Monster Dimension"
      },
      image: "https://placekitten.com/300/300"
    }
  ]);
});
it("filter gender", () => {
  expect(
    app.filterData(
      [
        {
          id: 1,
          name: "Rick Sanchez",
          status: "Alive",
          species: "Human",
          gender: "Male",
          origin: {
            name: "Earth (C-137)"
          },
          location: {
            name: "Earth (Replacement Dimension)"
          },
          image: "https://placekitten.com/300/300"
        },
        {
          id: 2,
          name: "Morty Smith",
          status: "Alive",
          species: "Human",
          gender: "Male",
          origin: {
            name: "Earth (C-137)"
          },
          location: {
            name: "Earth (Replacement Dimension)"
          },
          image: "https://placekitten.com/300/300"
        },
        {
          id: 6,
          name: "Abadango Cluster Princess",
          status: "Alive",
          species: "Alien",
          gender: "Female",
          origin: {
            name: "Abadango"
          },
          location: {
            name: "Abadango"
          },
          image: "https://placekitten.com/300/300"
        },
        {
          id: 7,
          name: "Abradolf Lincler",
          status: "unknown",
          species: "Human",
          gender: "Male",
          origin: {
            name: "Earth (Replacement Dimension)"
          },
          location: {
            name: "Testicle Monster Dimension"
          },
          image: "https://placekitten.com/300/300"
        },
        {
          id: 13,
          name: "Alien Googah",
          status: "unknown",
          species: "Alien",
          gender: "unknown",
          origin: {
            name: "unknown"
          },
          location: {
            name: "Earth (Replacement Dimension)"
          },
          image: "https://placekitten.com/300/300"
        }
      ],
      "Male",
      "gender"
    )
  ).toEqual([
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)"
      },
      location: {
        name: "Earth (Replacement Dimension)"
      },
      image: "https://placekitten.com/300/300"
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)"
      },
      location: {
        name: "Earth (Replacement Dimension)"
      },
      image: "https://placekitten.com/300/300"
    },
    {
      id: 7,
      name: "Abradolf Lincler",
      status: "unknown",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)"
      },
      location: {
        name: "Testicle Monster Dimension"
      },
      image: "https://placekitten.com/300/300"
    }
  ]);
});

it("filter status", () => {
  expect(
    app.filterData(
      [
        {
          id: 1,
          name: "Rick Sanchez",
          status: "Alive",
          species: "Human",
          gender: "Male",
          origin: {
            name: "Earth (C-137)"
          },
          location: {
            name: "Earth (Replacement Dimension)"
          },
          image: "https://placekitten.com/300/300"
        },
        {
          id: 2,
          name: "Morty Smith",
          status: "Alive",
          species: "Human",
          gender: "Male",
          origin: {
            name: "Earth (C-137)"
          },
          location: {
            name: "Earth (Replacement Dimension)"
          },
          image: "https://placekitten.com/300/300"
        },
        {
          id: 6,
          name: "Abadango Cluster Princess",
          status: "Alive",
          species: "Alien",
          gender: "Female",
          origin: {
            name: "Abadango"
          },
          location: {
            name: "Abadango"
          },
          image: "https://placekitten.com/300/300"
        },
        {
          id: 7,
          name: "Abradolf Lincler",
          status: "unknown",
          species: "Human",
          gender: "Male",
          origin: {
            name: "Earth (Replacement Dimension)"
          },
          location: {
            name: "Testicle Monster Dimension"
          },
          image: "https://placekitten.com/300/300"
        },
        {
          id: 13,
          name: "Alien Googah",
          status: "unknown",
          species: "Alien",
          gender: "unknown",
          origin: {
            name: "unknown"
          },
          location: {
            name: "Earth (Replacement Dimension)"
          },
          image: "https://placekitten.com/300/300"
        }
      ],
      "Alive",
      "status"
    )
  ).toEqual([
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)"
      },
      location: {
        name: "Earth (Replacement Dimension)"
      },
      image: "https://placekitten.com/300/300"
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)"
      },
      location: {
        name: "Earth (Replacement Dimension)"
      },
      image: "https://placekitten.com/300/300"
    },
    {
      id: 6,
      name: "Abadango Cluster Princess",
      status: "Alive",
      species: "Alien",
      gender: "Female",
      origin: {
        name: "Abadango"
      },
      location: {
        name: "Abadango"
      },
      image: "https://placekitten.com/300/300"
    }
  ]);
});
it("ordenarNomes", () => {
  expect(app.selectOrderAlpha("A-Z", [
    {
      name: "Rick Sanchez"
    },
    {
      name: "Morty Smith"
    },
    {
      name: "Abradolf Lincler"
    }
  ])).toEqual([
    {
      name: "Abradolf Lincler"
    },
    {
      name: "Morty Smith"
    },
    {
      name: "Rick Sanchez",
    }
  ]);
});
it("desordenarNomes", () => {
  expect(app.selectOrderAlpha("Z-A", [
    {
      name: "Abradolf Lincler"
    },
    {
      name: "Morty Smith"
    },
    {
      name: "Rick Sanchez"
    }
  ])).toEqual([
    {
      name: "Rick Sanchez"
    },
    {
      name: "Morty Smith"
    },
    {
      name: "Abradolf Lincler"
    }
  ]);
});
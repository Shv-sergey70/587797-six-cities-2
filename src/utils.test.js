import {getOffersByCity, getRatingPercent, getUniqueCities} from "./utils";

const cities = [
  {name: `Paris`},
  {name: `Brussels`},
  {name: `Cologne`},
  {name: `Amsterdam`},
  {name: `Hamburg`}
];

const offersData = [
  {
    id: 1,
    city: cities[0]
  },
  {
    id: 2,
    city: cities[1]
  },
  {
    id: 3,
    city: cities[0]
  },
  {
    id: 4,
    city: cities[2]
  },
  {
    id: 5,
    city: cities[3]
  },
  {
    id: 6,
    city: cities[4]
  },
  {
    id: 7,
    city: cities[3]
  },
  {
    id: 8,
    city: cities[1]
  },
  {
    id: 9,
    city: cities[2]
  }
];

describe(`getOffersByCity correctly works`, () => {
  it(`filters with data`, () => {
    expect(getOffersByCity(cities[0], offersData)).toEqual([offersData[0], offersData[2]]);
  });
  it(`filters no data`, () => {
    expect(getOffersByCity(cities[0], [])).toEqual([]);
  });
});

describe(`getUniqueCities correctly works`, () => {
  it(`filters with data`, () => {
    expect(getUniqueCities(offersData)).toEqual(cities);
  });
});

describe(`getRatingPercent correctly works`, () => {
  it(`normal work with int rating`, () => {
    expect(getRatingPercent(3, 5)).toEqual(60);
  });

  it(`normal work with float rating`, () => {
    expect(getRatingPercent(4.2, 5)).toEqual(80);
  });
});

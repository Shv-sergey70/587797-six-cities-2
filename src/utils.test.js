import {getOffersByCity, getUniqueCities} from "./utils";

const cities = [
  {
    name: `Paris`
  },
  {
    name: `Brussels`
  },
  {
    name: `Cologne`
  },
  {
    name: `Amsterdam`
  },
  {
    name: `Hamburg`
  }
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

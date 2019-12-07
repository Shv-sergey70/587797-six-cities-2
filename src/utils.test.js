import {getOffersByCity} from "./utils";

const cities = [
  {
    name: `Paris`
  },
  {
    name: `Brussels`
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

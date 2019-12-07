import {reducer} from "./reducer";

const cities = [
  {
    name: `Paris`
  },
  {
    name: `Brussels`
  }
];

const offersMock = [
  {
    id: 1,
    city: cities[0],
    title: `Beautiful & luxurious apartment at great location`,
    images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
    bedrooms: 2,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    type: `Apartment`,
    price: 80,
    rating: 4.5,
    host: {
      isPro: true,
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    }
  },
  {
    id: 5,
    city: cities[1],
    title: `Nice, cozy, warm big bed apartment`,
    images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
    bedrooms: 2,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    type: `Apartment`,
    price: 180,
    rating: 5,
    host: {
      isPro: true,
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.919309666406198
    }
  }
];

const defaultInitialState = {
  cities: [],
  currentCity: {},
  offers: [],
  authData: {}
};

describe(`Reducer works correctly`, () => {
  it(`Reducer with non-existing action should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(defaultInitialState);
  });

  it(`Reducer with CHANGE_CITY action should change city in state`, () => {
    const currentCity = {
      name: `Paris`
    };

    expect(reducer(defaultInitialState, {
      type: `CHANGE_CITY`,
      payload: currentCity
    })).toEqual({
      cities: [],
      currentCity,
      offers: [],
      authData: {}
    });
  });

  it(`Reducer with LOAD_OFFERS action should change offers, cities and currentCity in state`, () => {
    expect(reducer(defaultInitialState, {
      type: `LOAD_OFFERS`,
      payload: offersMock
    })).toEqual({
      cities,
      currentCity: cities[0],
      offers: offersMock,
      authData: {}
    });
  });

  it(`Reducer with AUTHORIZE action should change authData in state`, () => {
    const authData = {
      name: `Maria`,
      email: `maria@mail.com`
    };

    expect(reducer(defaultInitialState, {
      type: `AUTHORIZE`,
      payload: authData
    })).toEqual({
      cities: [],
      currentCity: {},
      offers: [],
      authData
    });
  });
});

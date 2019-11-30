import {reducer, ActionCreator, getOffersByCity} from "./reducer";

export const cities = [
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

const defaultInitialState = {
  currentCity: cities[0],
  currentOffers: [
    {
      id: 1,
      city: cities[0],
      title: `Beautiful & luxurious apartment at great location`,
      previewImage: `/img/apartment-01.jpg`,
      images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
      bedrooms: 2,
      maxAdults: 2,
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      isPremium: true,
      isFavorite: true,
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
      city: cities[0],
      title: `Nice, cozy, warm big bed apartment`,
      previewImage: `/img/apartment-02.jpg`,
      images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
      bedrooms: 2,
      maxAdults: 2,
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      isPremium: true,
      isFavorite: true,
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
  ]
};

describe(`getOffersByCity correctly works`, () => {
  it(`filters with data`, () => {
    expect(getOffersByCity(`Paris`, offersData)).toEqual([
      {
        id: 1,
        city: cities[0]
      },
      {
        id: 3,
        city: cities[0]
      }]);
  });
  it(`filters no data`, () => {
    expect(getOffersByCity(`Paris`, [])).toEqual([]);
  });
});

describe(`ActionCreate works correctly`, () => {
  it(`changeCity method returns correct answer`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: `CHANGE_CITY`,
      payload: `Amsterdam`
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer with non-existing action should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(defaultInitialState);
  });

  it(`Reducer with CHANGE_CITY action should change city in state`, () => {
    expect(reducer(defaultInitialState, {
      type: `CHANGE_CITY`,
      payload: `Brussels`
    })).toEqual({
      currentCity: {
        name: `Brussels`
      },
      currentOffers: [
        {
          id: 3,
          city: cities[1],
          title: `Canal View Prinsengracht`,
          previewImage: `/img/apartment-02.jpg`,
          images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
          bedrooms: 1,
          maxAdults: 2,
          goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
          isPremium: false,
          isFavorite: true,
          type: `Apartment`,
          price: 120,
          rating: 5,
          host: {
            isPro: true,
            name: `Angelina`,
            avatar: `/img/avatar-angelina.jpg`
          },
          description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          location: {
            latitude: 52.3909553943508,
            longitude: 4.929309666406198
          }
        }
      ]
    });
  });
});

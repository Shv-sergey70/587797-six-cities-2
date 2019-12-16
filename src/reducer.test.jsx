import {reducer} from "./reducer";
import {cities, offersMock, offersWithModelsMock, commentsMock, commentsWithModelsMock} from "./reducer-mock-data";

const defaultInitialState = {
  cities: [],
  offers: [],
  favoriteOffers: [],
  currentCity: {},
  currentOfferDetail: null,
  currentComments: [],
  activeOfferLocation: null,
  authData: {},
  sortingType: {
    name: `POPULAR`,
    text: `Popular`
  }
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
      offers: [],
      favoriteOffers: [],
      currentCity,
      currentOfferDetail: null,
      currentComments: [],
      activeOfferLocation: null,
      authData: {},
      sortingType: {
        name: `POPULAR`,
        text: `Popular`
      }
    });
  });

  it(`Reducer with LOAD_OFFERS action should change offers, cities and currentCity in state`, () => {
    expect(reducer(defaultInitialState, {
      type: `LOAD_OFFERS`,
      payload: offersMock
    })).toEqual({
      cities,
      currentCity: cities[0],
      offers: offersWithModelsMock,
      favoriteOffers: [],
      currentOfferDetail: null,
      currentComments: [],
      activeOfferLocation: null,
      authData: {},
      sortingType: {
        name: `POPULAR`,
        text: `Popular`
      }
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
      authData,
      favoriteOffers: [],
      currentOfferDetail: null,
      currentComments: [],
      activeOfferLocation: null,
      sortingType: {
        name: `POPULAR`,
        text: `Popular`
      }
    });
  });

  it(`Reducer with TOGGLE_FAVORITE_HOTEL action should change favoriteOffers and offers in state`, () => {
    const payload = {
      hotelId: 1,
      isSetFavorite: true
    };

    const newOffersData = offersWithModelsMock.slice();
    newOffersData.find((offer) => offer.id === payload.hotelId).isFavorite = payload.isSetFavorite;

    expect(reducer(Object.assign({}, defaultInitialState, {
      offers: offersWithModelsMock,
      favoriteOffers: []
    }), {
      type: `TOGGLE_FAVORITE_HOTEL`,
      payload
    })).toEqual({
      cities: [],
      offers: newOffersData,
      favoriteOffers: [newOffersData[0]],
      currentCity: {},
      currentOfferDetail: null,
      currentComments: [],
      activeOfferLocation: null,
      authData: {},
      sortingType: {
        name: `POPULAR`,
        text: `Popular`
      }
    });
  });

  it(`Reducer with LOAD_FAVORITES action should change favoriteOffers in state`, () => {
    expect(reducer(defaultInitialState, {
      type: `LOAD_FAVORITES`,
      payload: [offersMock[1]]
    })).toEqual({
      cities: [],
      offers: [],
      favoriteOffers: [offersWithModelsMock[1]],
      currentCity: {},
      currentOfferDetail: null,
      currentComments: [],
      activeOfferLocation: null,
      authData: {},
      sortingType: {
        name: `POPULAR`,
        text: `Popular`
      }
    });
  });

  it(`Reducer with CHANGE_ACTIVE_OFFER action should change activeOfferLocation in state`, () => {
    const offerId = 5;

    expect(reducer(Object.assign({}, defaultInitialState, {offers: offersWithModelsMock}), {
      type: `CHANGE_ACTIVE_OFFER`,
      payload: offerId
    })).toEqual({
      cities: [],
      offers: offersWithModelsMock,
      favoriteOffers: [],
      currentCity: {},
      currentOfferDetail: null,
      currentComments: [],
      activeOfferLocation: offersWithModelsMock.find((offer) => offer.id === offerId).location,
      authData: {},
      sortingType: {
        name: `POPULAR`,
        text: `Popular`
      }
    });
  });

  it(`Reducer with SET_CURRENT_OFFER_DETAIL action should change currentOfferDetail in state`, () => {
    const offerId = 5;

    expect(reducer(Object.assign({}, defaultInitialState, {offers: offersWithModelsMock}), {
      type: `SET_CURRENT_OFFER_DETAIL`,
      payload: offerId
    })).toEqual({
      cities: [],
      offers: offersWithModelsMock,
      favoriteOffers: [],
      currentCity: {},
      currentOfferDetail: offersWithModelsMock.find((offer) => offer.id === offerId),
      currentComments: [],
      activeOfferLocation: null,
      authData: {},
      sortingType: {
        name: `POPULAR`,
        text: `Popular`
      }
    });
  });

  it(`Reducer with LOAD_COMMENTS_FOR_OFFER action should change currentComments in state`, () => {
    expect(reducer(defaultInitialState, {
      type: `LOAD_COMMENTS_FOR_OFFER`,
      payload: commentsMock
    })).toEqual({
      cities: [],
      offers: [],
      favoriteOffers: [],
      currentCity: {},
      currentOfferDetail: null,
      currentComments: commentsWithModelsMock,
      activeOfferLocation: null,
      authData: {},
      sortingType: {
        name: `POPULAR`,
        text: `Popular`
      }
    });
  });

  it(`Reducer with CHANGE_SORTING_TYPE action should change sortingType in state`, () => {
    const newSortingType = {
      name: `PRICE_LOW_TO_HIGH`,
      text: `Price: low to high`
    };

    expect(reducer(defaultInitialState, {
      type: `CHANGE_SORTING_TYPE`,
      payload: newSortingType
    })).toEqual({
      cities: [],
      offers: [],
      favoriteOffers: [],
      currentCity: {},
      currentOfferDetail: null,
      currentComments: [],
      activeOfferLocation: null,
      authData: {},
      sortingType: newSortingType
    });
  });
});

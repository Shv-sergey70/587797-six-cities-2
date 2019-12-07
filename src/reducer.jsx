import OfferModel from "./entities/offer-model";
import ActionType from './const/action';

const initialState = {
  cities: [],
  currentCity: {},
  offers: [],
  authData: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return Object.assign({}, state, {
        currentCity: action.payload
      });
    }
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload.map((offer) => new OfferModel(offer)),
        currentCity: action.payload[0].city,
        cities: action.payload.reduce((acc, offer) => {
          const city = offer.city;

          if (acc.map[city.name] !== undefined) {
            return acc;
          }

          acc.map[city.name] = true;
          acc.cities.push(city);

          return acc;
        }, {
          map: {},
          cities: []
        }).cities
      });
    case ActionType.AUTHORIZE:
      return Object.assign({}, state, {
        authData: action.payload
      });
  }

  return state;
};

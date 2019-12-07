import OfferModel from "./entities/offer-model";
import ActionType from './const/action';
import {getUniqueCities} from "./utils";

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
        cities: getUniqueCities(action.payload)
      });
    case ActionType.AUTHORIZE:
      return Object.assign({}, state, {
        authData: action.payload
      });
  }

  return state;
};

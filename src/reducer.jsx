import OfferModel from "./entities/offer-model";
import ActionType from './const/action';
import {getOffersByCity, getUniqueCities} from "./utils";
import CommentModel from "./entities/comment-model";

const initialState = {
  cities: [],
  offers: [],
  favoriteOffers: [],
  currentCity: {},
  currentOfferDetail: null,
  currentComments: [],
  activeOfferLocation: null,
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
      const offers = action.payload.map((offer) => new OfferModel(offer));
      return Object.assign({}, state, {
        offers,
        currentCity: action.payload[0].city,
        cities: getUniqueCities(action.payload),
        currentOffers: getOffersByCity(action.payload[0].city, offers),
      });
    case ActionType.AUTHORIZE:
      return Object.assign({}, state, {
        authData: action.payload
      });
    case ActionType.LOAD_FAVORITES:
      return Object.assign({}, state, {
        favoriteOffers: action.payload.map((offer) => new OfferModel(offer))
      });
    case ActionType.TOGGLE_FAVORITE_HOTEL:
      const newOffer = new OfferModel(action.payload);

      let favoriteOffersCopy = state.favoriteOffers.slice();
      const offersCopy = state.offers.slice();

      if (newOffer.isFavorite) {
        favoriteOffersCopy.push(newOffer);
      } else {
        favoriteOffersCopy = favoriteOffersCopy.filter((offer) => offer.id !== newOffer.id);
      }

      offersCopy.find((offer) => offer.id === newOffer.id).isFavorite = newOffer.isFavorite;

      return Object.assign({}, state, {
        favoriteOffers: favoriteOffersCopy,
        offers: offersCopy
      });
    case ActionType.CHANGE_ACTIVE_OFFER:
      return Object.assign({}, state, {
        activeOfferLocation: action.payload
      });
    case ActionType.SET_CURRENT_OFFER_DETAIL:
      return Object.assign({}, state, {
        currentOfferDetail: action.payload
      });
    case ActionType.LOAD_COMMENTS_FOR_OFFER:
      return Object.assign({}, state, {
        currentComments: action.payload.map((comment) => new CommentModel(comment))
      });
  }

  return state;
};

import OfferModel from "./entities/offer-model";
import {ActionType} from './const/action';
import {getRandomElementFromArray, getUniqueCities} from "./utils";
import CommentModel from "./entities/comment-model";
import {SortingType} from "./const/common";

const initialState = {
  cities: [],
  offers: [],
  favoriteOffers: [],
  currentCity: {},
  currentOfferDetail: null,
  currentComments: [],
  activeOfferLocation: null,
  authData: {},
  sortingType: SortingType.POPULAR
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
        currentCity: getRandomElementFromArray(getUniqueCities(offers)),
        cities: getUniqueCities(action.payload)
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
      const {
        hotelId,
        isSetFavorite
      } = action.payload;

      const offersCopy = state.offers.slice();
      const offerForChange = offersCopy.find((offer) => offer.id === hotelId);
      offerForChange.isFavorite = isSetFavorite;

      let favoriteOffersCopy = state.favoriteOffers.slice();

      if (isSetFavorite) {
        favoriteOffersCopy.push(offerForChange);
      } else {
        favoriteOffersCopy = favoriteOffersCopy.filter((offer) => offer.id !== hotelId);
      }

      return Object.assign({}, state, {
        favoriteOffers: favoriteOffersCopy,
        offers: offersCopy
      });
    case ActionType.CHANGE_ACTIVE_OFFER:
      const activeOffer = state.offers.find((offer) => offer.id === action.payload);

      return Object.assign({}, state, {
        activeOfferLocation: activeOffer ? activeOffer.location : null
      });
    case ActionType.SET_CURRENT_OFFER_DETAIL:
      return Object.assign({}, state, {
        currentOfferDetail: state.offers.find((offer) => offer.id === action.payload)
      });
    case ActionType.LOAD_COMMENTS_FOR_OFFER:
      return Object.assign({}, state, {
        currentComments: action.payload.map((comment) => new CommentModel(comment))
      });
    case ActionType.CHANGE_SORTING_TYPE:
      return Object.assign({}, state, {
        sortingType: action.payload
      });
  }

  return state;
};

import {createSelector} from 'reselect';
import {getOffersByCity} from "./utils";

const getOffersByCities = (offers) => {
  return offers.reduce((acc, offer) => {
    if (acc[offer.city.name]) {
      acc[offer.city.name].push(offer);
    } else {
      acc[offer.city.name] = [offer];
    }

    return acc;
  }, {});
};

const getNearestOffers = (offers) => {
  if (offers) {
    return offers.length > 3 ? offers.slice(0, 3) : offers;
  }

  return [];
};

const currentOfferDetail = (state) => state.currentOfferDetail;
const currentOffers = (state) => state.currentOffers;
const currentCity = (state) => state.currentCity;
const allOffers = (state) => state.offers;
const favoriteOffers = (state) => state.favoriteOffers;
const authData = (state) => state.authData;

export default {
  getUserEmail: createSelector([authData], (data) => data ? data.email : null),
  getCurrentOffers: createSelector([currentCity, allOffers], (city, offers) => getOffersByCity(city, offers)),
  getFavoriteOffersByCities: createSelector([favoriteOffers], getOffersByCities),
  getNearestOffers: createSelector([currentOffers, currentOfferDetail], getNearestOffers)
};

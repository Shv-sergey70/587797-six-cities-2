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

const getNearestOffers = (offers, currentOfferDetail) => {
  if (offers && currentOfferDetail) {
    const nearestWithoutCurrent = offers.filter((offer) => offer.id !== currentOfferDetail.id);

    return nearestWithoutCurrent.length > 3 ? nearestWithoutCurrent.slice(0, 3) : nearestWithoutCurrent;
  }

  return [];
};

const currentOfferDetail = (state) => state.currentOfferDetail;
const currentOffers = (state) => state.currentOffers;
const currentCity = (state) => state.currentCity;
const allOffers = (state) => state.offers;
const favoriteOffers = (state) => state.favoriteOffers;
const authData = (state) => state.authData;
const sortingType = (state) => state.sortingType;

export default {
  getUserEmail: createSelector([authData], (data) => data ? data.email : null),
  getCurrentOffers: createSelector([currentCity, allOffers, sortingType], (city, offers, sort) => getOffersByCity(city, offers, sort)),
  getFavoriteOffersByCities: createSelector([favoriteOffers], getOffersByCities),
  getNearestOffers: createSelector([currentOffers, currentOfferDetail], getNearestOffers)
};

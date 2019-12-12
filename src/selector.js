import {createSelector} from 'reselect';
import {getOffersByCity} from "./utils";
import moment from "moment";
import {MAX_COMMENTS_FOR_PAGE, MAX_NEAREST_PLACES} from "./const/common";

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

    return nearestWithoutCurrent.length > MAX_NEAREST_PLACES ? nearestWithoutCurrent.slice(0, MAX_NEAREST_PLACES) : nearestWithoutCurrent;
  }

  return [];
};

const getSortedCurrentComments = (comments) => {
  const sortedComments = comments.sort((a, b) => moment(b.date).unix() - moment(a.date).unix());

  return sortedComments.length > MAX_COMMENTS_FOR_PAGE ? sortedComments.slice(0, MAX_COMMENTS_FOR_PAGE) : sortedComments;
};

const currentOfferDetail = (state) => state.currentOfferDetail;
const currentOffers = (state) => state.currentOffers;
const currentCity = (state) => state.currentCity;
const allOffers = (state) => state.offers;
const favoriteOffers = (state) => state.favoriteOffers;
const authData = (state) => state.authData;
const sortingType = (state) => state.sortingType;
const currentComments = (state) => state.currentComments;

export default {
  isUserAuthorized: createSelector([authData], (data) => !data),
  getUserEmail: createSelector([authData], (data) => data ? data.email : null),
  getCurrentOffers: createSelector([currentCity, allOffers, sortingType], (city, offers, sort) => getOffersByCity(city, offers, sort)),
  getFavoriteOffersByCities: createSelector([favoriteOffers], getOffersByCities),
  getNearestOffers: createSelector([currentOffers, currentOfferDetail], getNearestOffers),
  getSortedCurrentComments: createSelector([currentComments], getSortedCurrentComments)
};

import {createSelector} from 'reselect';
import {getOffersByCity} from "./utils";

const getOffersByCities = (offers) => {
  console.log(`Recount`, offers);
  return offers.reduce((acc, offer) => {
    if (acc[offer.city.name]) {
      acc[offer.city.name].push(offer);
    } else {
      acc[offer.city.name] = [offer];
    }

    return acc;
  }, {});
};

const currentCity = (state) => state.currentCity;
const allOffers = (state) => state.offers;
const favoriteOffers = (state) => state.favoriteOffers;

export default {
  getCurrentCity: createSelector(currentCity, (city) => city),
  getCurrentOffers: createSelector([currentCity, allOffers], (city, offers) => getOffersByCity(city, offers)),
  getFavoriteOffersByCities: createSelector([favoriteOffers], getOffersByCities)
};

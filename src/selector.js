import {createSelector} from 'reselect';
import {getOffersByCity} from "./utils";

const currentCity = (state) => state.currentCity;
const allOffers = (state) => state.offers;

export default {
  getCurrentCity: createSelector(currentCity, (city) => city),
  getCurrentOffers: createSelector([currentCity, allOffers], (city, offers) => getOffersByCity(city, offers))
};

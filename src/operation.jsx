import ActionCreator from "./action-creator";
import {ApiRoute} from './const/routes';

const handleLoginResponse = (dispatch) => (response) => dispatch(ActionCreator.authorize(response.data));
const handleOffersResponse = (dispatch) => (response) => dispatch(ActionCreator.loadOffers(response.data));
const handleCommentsResponse = (dispatch) => (response) => dispatch(ActionCreator.loadCommentsForOffer(response.data));

export default {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(ApiRoute.HOTELS)
      .then(handleOffersResponse(dispatch));
  },
  authorize: (email, password) => (dispatch, _getState, api) => {
    return api.post(ApiRoute.LOGIN, {email, password})
      .then(handleLoginResponse(dispatch));
  },
  checkAuth: () => (dispatch, _getState, api) => {
    return api.get(ApiRoute.LOGIN)
      .then(handleLoginResponse(dispatch))
      .catch(() => {});
  },
  loadFavorites: () => (dispatch, _getState, api) => {
    return api.get(ApiRoute.FAVORITE)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(response.data));
      });
  },
  toggleFavoriteHotel: (hotelId, isSetFavorite) => (dispatch, _getState, api) => {
    return api.post(`${ApiRoute.FAVORITE}/${hotelId}/${Number(isSetFavorite)}`)
      .then(() => dispatch(ActionCreator.toggleFavoriteHotel(hotelId, isSetFavorite)));
  },
  loadOffersForDetailPage: (offerId) => (dispatch, _, api) => {
    return api.get(ApiRoute.HOTELS)
      .then(handleOffersResponse(dispatch))
      .then(() => dispatch(ActionCreator.setCurrentOfferIdDetail(offerId)))
      .then(() => dispatch(ActionCreator.changeActiveOffer(offerId)))
      .then(() => api.get(`${ApiRoute.COMMENTS}/${offerId}`))
      .then(handleCommentsResponse(dispatch));
  },
  addReview: (offerId, rating, comment) => (dispatch, _, api) => {
    return api.post(`${ApiRoute.COMMENTS}/${offerId}`, {rating, comment})
      .then(handleCommentsResponse(dispatch))
      .catch((err) => {
        throw new Error(err);
      });
  }
};

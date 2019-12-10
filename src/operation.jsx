import ActionCreator from "./action-creator";
import {ApiRoute} from './const/routes';

const handleLoginResponse = (dispatch) => (response) => dispatch(ActionCreator.authorize(response.data));

export default {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(ApiRoute.HOTELS)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
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
    return api.post(`/favorite/${hotelId}/${Number(isSetFavorite)}`)
      .then((response) => {
        console.log(`Actual data`, response);
        dispatch(ActionCreator.toggleFavoriteHotel(response.data));
      });
  },
  loadCommentsForOffer: (hotelId) => (dispatch, _getState, api) => {
    return api.get(`/comments/${hotelId}`)
      .then((response) => {
        console.log(`Actual data`, response);
        dispatch(ActionCreator.loadCommentsForOffer(response.data));
      });
  }
};

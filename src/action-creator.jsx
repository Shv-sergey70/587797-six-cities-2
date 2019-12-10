import ActionType from './const/action';

export default {
  changeCity: (chosenCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: chosenCity
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  authorize: (authData) => ({
    type: ActionType.AUTHORIZE,
    payload: authData
  }),
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  }),
  toggleFavoriteHotel: (updatedOffer) => ({
    type: ActionType.TOGGLE_FAVORITE_HOTEL,
    payload: updatedOffer
  }),
  changeActiveOffer: (updatedLocation) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: updatedLocation
  }),
  setCurrentOfferDetail: (currentOffer) => ({
    type: ActionType.SET_CURRENT_OFFER_DETAIL,
    payload: currentOffer
  }),
  loadCommentsForOffer: (comments) => ({
    type: ActionType.LOAD_COMMENTS_FOR_OFFER,
    payload: comments
  })
};

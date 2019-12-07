import OfferModel from "./entities/offer-model";

const initialState = {
  cities: [],
  currentCity: {},
  offers: [],
  authData: {}
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  AUTHORIZE: `AUTHORIZE`
};

export const ActionCreator = {
  changeCity: (chosenCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: chosenCity
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  authorize: (isAuth) => ({
    type: ActionType.AUTHORIZE,
    payload: isAuth
  })
};

// export const Operation = {
//   loadOffers: () => (dispatch, _getState, api) => {
//     return api.get(`/hotels`)
//       .then((response) => {
//         dispatch(ActionCreator.loadOffers(response.data));
//       });
//   },
//   authorize: (email, password) => (dispatch, _getState, api) => {
//     return api.post(`/login`, {email, password})
//       .then((response) => {
//         dispatch(ActionCreator.authorize(response.data));
//       });
//   }
// };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return Object.assign({}, state, {
        currentCity: action.payload
      });
    }
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload.map((offer) => new OfferModel(offer)),
        currentCity: action.payload[0].city,
        cities: action.payload.reduce((acc, offer) => {
          const city = offer.city;

          if (acc.map[city.name] !== undefined) {
            return acc;
          }

          acc.map[city.name] = true;
          acc.cities.push(city);

          return acc;
        }, {
          map: {},
          cities: []
        }).cities
      });
    case ActionType.AUTHORIZE:
      return Object.assign({}, state, {
        authData: action.payload
      });
  }

  return state;
};

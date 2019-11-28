import {cities} from "./mocks/cities";
import {offersData} from "./mocks/offers";

const initialState = {
  currentCity: cities[0],
  offersList: offersData.filter((offerData) => offerData.city === cities[0].name)
};

export const ActionCreator = {
  changeCity: (chosenCity) => ({
    type: `CHANGE_CITY`,
    payload: chosenCity
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`: {
      const newCity = cities.find((city) => city.name === action.payload);

      return Object.assign({}, state, {
        currentCity: newCity,
        offersList: offersData.filter((offerData) => offerData.city === newCity.name)
      });
    }
  }

  return state;
};

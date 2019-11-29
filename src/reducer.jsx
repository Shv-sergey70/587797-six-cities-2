import {cities} from "./mocks/cities";
import {offersData} from "./mocks/offers";

export const getOffersByCity = (selectedCityName, offers) => offers.filter((offer) => offer.city.name === selectedCityName);

const initialState = {
  currentCity: cities[0],
  currentOffers: getOffersByCity(cities[0].name, offersData)
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
        currentOffers: getOffersByCity(newCity.name, offersData)
      });
    }
  }

  return state;
};

import {ApiUrl, PrivateRoute} from "./const/routes";
import {SortingType} from "./const/common";

export const getOffersByCity = (selectedCity, offers, sortingType) => {
  const currentOffers = offers.filter((offer) => offer.city.name === selectedCity.name);

  switch (sortingType) {
    case SortingType.POPULAR:
      break;
    case SortingType.PRICE_HIGH_TO_LOW:
      currentOffers.sort((a, b) => b.price - a.price);

      break;
    case SortingType.PRICE_LOW_TO_HIGH:
      currentOffers.sort((a, b) => a.price - b.price);

      break;
    case SortingType.RATING_HIGH_TO_LOW:
      currentOffers.sort((a, b) => b.rating - a.rating);

      break;
  }

  return currentOffers;
};

export const getUniqueCities = (data) => {
  return data.reduce((acc, offer) => {
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
  }).cities;
};

export const getRatingPercent = (rating, maxRatingValue) => Math.round(rating) * 100 / maxRatingValue;

export const isPrivateRoute = (method, url) => {
  if (method) {
    const methodRoutes = PrivateRoute[method.toLowerCase()];

    if (methodRoutes) {
      return !!methodRoutes.find((route) => url === (ApiUrl + route) || url.startsWith(ApiUrl + route));
    }
  }

  return false;
};

export const areLocationsEquals = (location1, location2) => {
  return location1.latitude === location2.latitude && location1.longitude === location2.longitude;
};

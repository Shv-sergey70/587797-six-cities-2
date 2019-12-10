import {ApiUrl, PrivateRoute} from "./const/routes";

export const getOffersByCity = (selectedCity, offers) => offers.filter((offer) => offer.city.name === selectedCity.name);

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

export const getRatingPercent = (rating, maxRatingValue) => Math.round(rating * 100 / maxRatingValue);

export const isPrivateRoute = (method, url) => {
  if (method) {
    const methodRoutes = PrivateRoute[method.toLowerCase()];

    if (methodRoutes) {
      return !!methodRoutes.find((route) => {
        return url === (ApiUrl + route) || route.endsWith(route);
      });
    }
  }

  return false;
};

export const areLocationsEquals = (location1, location2) => {
  return location1.latitude === location2.latitude && location1.longitude === location2.longitude;
};

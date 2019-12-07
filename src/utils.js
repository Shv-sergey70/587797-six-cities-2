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

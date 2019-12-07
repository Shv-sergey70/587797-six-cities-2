export const getOffersByCity = (selectedCity, offers) => offers.filter((offer) => offer.city.name === selectedCity.name);

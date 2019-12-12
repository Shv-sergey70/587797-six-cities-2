export const MAX_RATING_VALUE = 5;
export const MAX_COMMENTS_FOR_PAGE = 10;
export const MAX_NEAREST_PLACES = 3;

export const FavoritesStatus = {
  SET: 1,
  UNSET: 0
};

export const SortingType = {
  POPULAR: {
    name: `POPULAR`,
    text: `Popular`
  },
  PRICE_LOW_TO_HIGH: {
    name: `PRICE_LOW_TO_HIGH`,
    text: `Price: low to high`
  },
  PRICE_HIGH_TO_LOW: {
    name: `PRICE_HIGH_TO_LOW`,
    text: `Price: high to low`
  },
  RATING_HIGH_TO_LOW: {
    name: `RATING_HIGH_TO_LOW`,
    text: `Top rated first`
  }
};

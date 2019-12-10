export const ApiUrl = `https://htmlacademy-react-2.appspot.com/six-cities`;

export const Route = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorite`,
  OFFER: `/offer/:offerId`
};

export const ApiRoute = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
  FAVORITE: `/favorite`
};

export const PrivateRoute = {
  get: [
    ApiRoute.FAVORITE
  ],
  post: [
    ApiRoute.FAVORITE
  ]
};

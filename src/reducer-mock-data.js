import OfferModel from "./entities/offer-model";
import UserModel from "./entities/user-model";
import CommentModel from "./entities/comment-model";

const cities = [
  {name: `Paris`}
];

const offersMock = [
  {
    id: 1,
    city: cities[0],
    title: `Beautiful & luxurious apartment at great location`,
    images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
    bedrooms: 2,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    type: `Apartment`,
    price: 80,
    rating: 4.5,
    host: {
      isPro: true,
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    }
  },
  {
    id: 5,
    city: cities[0],
    title: `Nice, cozy, warm big bed apartment`,
    images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
    bedrooms: 2,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    type: `Apartment`,
    price: 180,
    rating: 5,
    host: {
      isPro: true,
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.919309666406198
    }
  }
];

const offersWithModelsMock = [
  new OfferModel({
    id: 1,
    city: cities[0],
    title: `Beautiful & luxurious apartment at great location`,
    images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
    bedrooms: 2,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    type: `Apartment`,
    price: 80,
    rating: 4.5,
    host: new UserModel({
      isPro: true,
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`
    }),
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    }
  }),
  new OfferModel({
    id: 5,
    city: cities[0],
    title: `Nice, cozy, warm big bed apartment`,
    images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
    bedrooms: 2,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    type: `Apartment`,
    price: 180,
    rating: 5,
    host: new UserModel({
      isPro: true,
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`
    }),
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.919309666406198
    }
  })
];

const commentsMock = [
  {
    id: 1,
    user: {
      id: 1,
      isPro: true,
      name: `Angelina`,
      avatarUrl: `/img/avatar-angelina.jpg`
    },
    rating: 3,
    comment: `Comment`,
    date: `2019-12-12`
  },
  {
    id: 2,
    user: {
      id: 2,
      isPro: true,
      name: `Angelina`,
      avatarUrl: `/img/avatar-angelina.jpg`
    },
    rating: 4,
    comment: `Comment2`,
    date: `2019-12-15`
  }
];

const commentsWithModelsMock = [
  new CommentModel({
    id: 1,
    user: new UserModel({
      id: 1,
      isPro: true,
      name: `Angelina`,
      avatarUrl: `/img/avatar-angelina.jpg`
    }),
    rating: 3,
    comment: `Comment`,
    date: `2019-12-12`
  }),
  new CommentModel({
    id: 2,
    user: new UserModel({
      id: 2,
      isPro: true,
      name: `Angelina`,
      avatarUrl: `/img/avatar-angelina.jpg`
    }),
    rating: 4,
    comment: `Comment2`,
    date: `2019-12-15`
  })
];

export {cities, offersMock, offersWithModelsMock, commentsMock, commentsWithModelsMock};

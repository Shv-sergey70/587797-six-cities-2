import React from 'react';
import renderer from 'react-test-renderer';
import {OfferDetail} from "./offer-detail";

jest.mock(`../page-header/page-header.jsx`, () => `PageHeader`);
jest.mock(`../card/card.jsx`, () => `Card`);
jest.mock(`../review-item/review-item.jsx`, () => `ReviewItem`);
jest.mock(`../map/map.jsx`, () => `Map`);
jest.mock(`../review-form/review-form.jsx`, () => `ReviewForm`);

jest.mock(`../../notifier`, () => ({
  error: jest.fn(),
}));

const nearestOffersData = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    previewImage: `/img/apartment-01.jpg`,
    isPremium: true,
    isFavorite: true,
    type: `apartment`,
    price: 80,
    rating: 4.4,
    bedrooms: 2,
    maxAdults: 2,
    images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    description: `A quiet cozy and picturesque that hides behind a a river`
  },
  {
    id: 2,
    title: `Beautiful & luxurious apartment at great location2`,
    previewImage: `/img/apartment-01.jpg`,
    isPremium: false,
    isFavorite: true,
    type: `apartment`,
    price: 180,
    rating: 2.4,
    bedrooms: 5,
    maxAdults: 3,
    images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`],
    description: `A quiet cozy and picturesque that hides behind a a river1`
  },
  {
    id: 3,
    title: `Beautiful & luxurious apartment at great location33`,
    previewImage: `/img/apartment-01.jpg`,
    isPremium: true,
    isFavorite: false,
    type: `room`,
    price: 820,
    rating: 4.9,
    bedrooms: 5,
    maxAdults: 4,
    images: [`/img/room.jpg`, `/img/apartment-01.jpg`],
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`],
    description: `A quiet cozy and picturesque that hides behind a a river22`
  }
];

const currentComments = [
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

it(`Offer detail correctly renders`, () => {
  const tree = renderer.create(
      <OfferDetail
        currentOfferDetail = {
          {
            id: 1,
            title: `Beautiful & luxurious apartment at great location`,
            images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
            bedrooms: 2,
            maxAdults: 2,
            goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
            isPremium: true,
            isFavorite: true,
            type: `Apartment`,
            price: 80,
            rating: 4.5,
            host: {
              isPro: true,
              name: `Angelina`,
              avatarUrl: `/img/avatar-angelina.jpg`
            },
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
          }
        }
        match={{
          params: {
            offerId: `1`
          }
        }}
        loadOffersForDetailPage={jest.fn()}
        currentComments={currentComments}
        nearestOffers={nearestOffersData}
        toggleFavoriteHotel={jest.fn()}
        isUserAuthorized={true}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

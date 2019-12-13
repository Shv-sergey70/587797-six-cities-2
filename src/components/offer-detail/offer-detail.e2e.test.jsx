import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {OfferDetail} from "./offer-detail";

Enzyme.configure({adapter: new Adapter()});

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

describe(`Success favorite toggle`, () => {
  it(`Unset from favorite`, () => {
    const currentOfferData = {
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
    };

    const toggleFavoriteHotelHandler = jest.fn();

    const offerDetailScreen = shallow(
        <OfferDetail
          currentOfferDetail = {currentOfferData}
          match={{
            params: {
              offerId: `1`
            }
          }}
          loadOffersForDetailPage={jest.fn()}
          currentComments={currentComments}
          nearestOffers={nearestOffersData}
          toggleFavoriteHotel={toggleFavoriteHotelHandler}
          isUserAuthorized={true}
        />);

    offerDetailScreen.find(`.property__bookmark-button`).simulate(`click`);

    expect(toggleFavoriteHotelHandler).toHaveBeenCalledTimes(1);
    expect(toggleFavoriteHotelHandler).toHaveBeenNthCalledWith(1, currentOfferData.id, false);
  });

  it(`Set favorite`, () => {
    const currentOfferData = {
      id: 1,
      title: `Beautiful & luxurious apartment at great location`,
      images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
      bedrooms: 2,
      maxAdults: 2,
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      isPremium: true,
      isFavorite: false,
      type: `Apartment`,
      price: 80,
      rating: 4.5,
      host: {
        isPro: true,
        name: `Angelina`,
        avatarUrl: `/img/avatar-angelina.jpg`
      },
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
    };

    const toggleFavoriteHotelHandler = jest.fn();

    const offerDetailScreen = shallow(
        <OfferDetail
          currentOfferDetail = {currentOfferData}
          match={{
            params: {
              offerId: `1`
            }
          }}
          loadOffersForDetailPage={jest.fn()}
          currentComments={currentComments}
          nearestOffers={nearestOffersData}
          toggleFavoriteHotel={toggleFavoriteHotelHandler}
          isUserAuthorized={true}
        />);

    offerDetailScreen.find(`.property__bookmark-button`).simulate(`click`);

    expect(toggleFavoriteHotelHandler).toHaveBeenCalledTimes(1);
    expect(toggleFavoriteHotelHandler).toHaveBeenNthCalledWith(1, currentOfferData.id, true);
  });
});

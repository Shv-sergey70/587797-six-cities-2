import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FavoritesItemOffer} from "./favorites-item-offer";

Enzyme.configure({adapter: new Adapter()});

const offerData = {
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
};

it(`Unset favorite status`, () => {
  const toggleFavoriteHotelHandler = jest.fn();

  const cardScreen = shallow(
      <FavoritesItemOffer
        offer = {offerData}
        toggleFavoriteHotel = {toggleFavoriteHotelHandler}
      />);

  cardScreen.find(`.place-card__bookmark-button`).simulate(`click`);

  expect(toggleFavoriteHotelHandler).toHaveBeenCalledTimes(1);
  expect(toggleFavoriteHotelHandler).toHaveBeenNthCalledWith(1, offerData.id, false);
});

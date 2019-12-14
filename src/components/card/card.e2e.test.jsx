import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from "./card";

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

describe(`Card selection works correct`, () => {
  it(`Card mouseEnter and mouseLeave success`, () => {
    const toggleFavoriteHotelHandler = jest.fn();
    const changeActiveOfferHandler = jest.fn();

    const cardScreen = shallow(
        <Card
          offer = {offerData}
          toggleFavoriteHotel = {toggleFavoriteHotelHandler}
          changeActiveOffer = {changeActiveOfferHandler}
        />);

    const cardItem = cardScreen.find(`article.place-card`);

    cardItem.simulate(`mouseEnter`);
    cardItem.simulate(`mouseLeave`);
    cardItem.simulate(`mouseEnter`);

    expect(changeActiveOfferHandler).toHaveBeenCalledTimes(3);
    expect(changeActiveOfferHandler).toHaveBeenNthCalledWith(1, offerData.id);
    expect(changeActiveOfferHandler).toHaveBeenNthCalledWith(2, null);
    expect(changeActiveOfferHandler).toHaveBeenNthCalledWith(3, offerData.id);
  });

  it(`Card adds to favorite successfully`, () => {
    const toggleFavoriteHotelHandler = jest.fn();
    const changeActiveOfferHandler = jest.fn();

    const cardScreen = shallow(
        <Card
          offer = {offerData}
          toggleFavoriteHotel = {toggleFavoriteHotelHandler}
          changeActiveOffer = {changeActiveOfferHandler}
        />);

    const addToFavoriteButton = cardScreen.find(`.place-card__bookmark-button`);

    addToFavoriteButton.simulate(`click`);
    addToFavoriteButton.simulate(`click`);
    addToFavoriteButton.simulate(`click`);

    expect(toggleFavoriteHotelHandler).toHaveBeenCalledTimes(3);
    expect(toggleFavoriteHotelHandler).toHaveBeenNthCalledWith(1, offerData.id, false);
  });
});

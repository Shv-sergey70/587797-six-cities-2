import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from "./card";

Enzyme.configure({adapter: new Adapter()});

const offerData = {
  title: `Beautiful & luxurious apartment at great location`,
  previewImage: `/img/apartment-01.jpg`,
  isPremium: true,
  isFavorite: true,
  type: `Apartment`,
  price: 80,
  rating: 4.5
};

it(`Card title success click and hover`, () => {
  const clickHandler = jest.fn();
  const hoverHandler = jest.fn();

  const cardScreen = shallow(
      <Card
        offer = {offerData}
        onTitleClick = {clickHandler}
        onCardHover = {hoverHandler}
      />);

  cardScreen.find(`.place-card__name a`).simulate(`click`);
  cardScreen.find(`.cities__place-card`).simulate(`mouseover`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(hoverHandler).toHaveBeenCalledWith(offerData);
});

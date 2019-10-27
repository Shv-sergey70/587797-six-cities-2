import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from "./card";

it(`Card correctly renders`, () => {
  const tree = renderer.create(
      <Card
        offer = {
          {
            title: `Beautiful & luxurious apartment at great location`,
            previewImage: `/img/apartment-01.jpg`,
            isPremium: true,
            isFavorite: true,
            type: `Apartment`,
            price: 80,
            rating: 4.5
          }
        }
        onTitleClick = {() => {}}
        onCardHover = {() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

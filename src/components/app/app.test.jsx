import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

const offers = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    previewImage: `/img/apartment-01.jpg`,
    isPremium: true,
    isFavorite: true,
    type: `Apartment`,
    price: 80,
    rating: 4.5
  },
  {
    id: 2,
    title: `Wood and stone place`,
    previewImage: `/img/apartment-01.jpg`,
    isPremium: true,
    isFavorite: false,
    type: `Private room`,
    price: 180,
    rating: 4
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    previewImage: `/img/apartment-02.jpg`,
    isPremium: false,
    isFavorite: true,
    type: `Apartment`,
    price: 120,
    rating: 5
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    previewImage: `/img/apartment-03.jpg`,
    isPremium: false,
    isFavorite: false,
    type: `Private room`,
    price: 40,
    rating: 3
  }
];

it(`App correctly renders`, () => {
  const tree = renderer.create(
      <App
        offers = {offers}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

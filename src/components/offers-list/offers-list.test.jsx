import React from 'react';
import renderer from 'react-test-renderer';
import {OffersList} from "./offers-list";

const offersData = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    previewImage: `/img/apartment-01.jpg`,
    isPremium: true,
    isFavorite: true,
    type: `Apartment`,
    price: 80,
    rating: 4.5
  },
  {
    title: `Wood and stone place`,
    previewImage: `/img/apartment-01.jpg`,
    isPremium: true,
    isFavorite: false,
    type: `Private room`,
    price: 180,
    rating: 4
  },
  {
    title: `Canal View Prinsengracht`,
    previewImage: `/img/apartment-02.jpg`,
    isPremium: false,
    isFavorite: true,
    type: `Apartment`,
    price: 120,
    rating: 5
  }
];

it(`OfferList correctly renders`, () => {
  const tree = renderer.create(
      <OffersList
        offers = {offersData}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

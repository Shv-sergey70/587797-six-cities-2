import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16/build";
import toJson from 'enzyme-to-json';

import {App} from './app';

Enzyme.configure({adapter: new Adapter()});

export const cities = [
  {
    name: `Paris`
  },
  {
    name: `Brussels`
  },
  {
    name: `Amsterdam`
  },
];

const offers = [
  {
    id: 1,
    city: cities[0],
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
    city: cities[1],
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
    city: cities[0],
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
    city: cities[2],
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
  const tree = shallow(
      <App
        currentCity = {
          {
            name: `Paris`
          }
        }
        onCityClick = {() => {}}
        allOffers = {offers}
        currentOffers = {offers.filter((offer) => offer.city.name === `Paris`)}
      />);

  expect(toJson(tree)).toMatchSnapshot();
});

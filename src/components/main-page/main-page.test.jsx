import React from 'react';
import {MainPage} from "./main-page";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from 'enzyme-to-json';

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
    rating: 4.5,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    }
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
    rating: 4,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    }
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
    rating: 5,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    }
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
    rating: 3,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    }
  }
];

it(`Main-page correctly renders`, () => {
  const tree = shallow(
      <MainPage
        allOffers = {offers}
        currentCity = {
          {
            name: `Paris`
          }
        }
        currentOffers = {offers.filter((offer) => offer.city.name === `Paris`)}
        onCityClick = {() => {}}
      />);

  expect(toJson(tree)).toMatchSnapshot();
});

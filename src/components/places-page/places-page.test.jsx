import React from 'react';
import renderer from 'react-test-renderer';
import {PlacesPage} from "./places-page";

jest.mock(`../cities-list/cities-list.jsx`, () => `CitiesList`);
jest.mock(`../sort/sort.jsx`, () => `Sort`);
jest.mock(`../offers-list/offers-list.jsx`, () => `OffersList`);
jest.mock(`../map/map.jsx`, () => `Map`);

const offersData = [
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
    description: `A quiet cozy and picturesque that hides behind a a river`,
    location: {
      latitude: 123,
      longitude: 456,
      zoom: 10
    }
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
    description: `A quiet cozy and picturesque that hides behind a a river1`,
    location: {
      latitude: 123,
      longitude: 456,
      zoom: 10
    }
  }
];

it(`Places page correctly renders`, () => {
  const tree = renderer.create(
      <PlacesPage
        currentCity = {{
          name: `Paris`,
          location: {
            latitude: 11,
            longitude: 22,
            zoom: 10
          }
        }}
        currentOffers={offersData}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

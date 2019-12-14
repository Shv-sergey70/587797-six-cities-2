import React from 'react';
import renderer from 'react-test-renderer';
import {FavoritesPage} from "./favorites-page";
import {BrowserRouter as Router} from "react-router-dom";

jest.mock(`../page-header/page-header.jsx`, () => `PageHeader`);
jest.mock(`../favorites-empty/favorites-empty.jsx`, () => `FavoritesEmpty`);
jest.mock(`../favorites-list/favorites-list.jsx`, () => `FavoritesList`);

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

describe(`Favorites page behavior`, () => {
  it(`No favorites offers`, () => {
    const tree = renderer.create(
        <Router>
          <FavoritesPage
            favoriteOffers={[]}
            loadFavorites={jest.fn()}
          />
        </Router>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With favorites offers`, () => {
    const tree = renderer.create(
        <Router>
          <FavoritesPage
            favoriteOffers={offersData}
            loadFavorites={jest.fn()}
          />
        </Router>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

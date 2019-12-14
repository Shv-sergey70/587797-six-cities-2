import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from "react-router-dom";
import {App} from "./app";

jest.mock(`../main-page/main-page.jsx`, () => `MainPage`);
jest.mock(`../sign-in/sign-in.jsx`, () => `SignIn`);
jest.mock(`../offer-detail/offer-detail.jsx`, () => `OfferDetail`);
jest.mock(`../favorites-page/favorites-page.jsx`, () => `FavoritesPage`);

it(`Main page with offer renders correctly`, () => {
  const tree = renderer.create(<Router>
    <App
      checkAuth={jest.fn()}
    />
  </Router>).toJSON();

  expect(tree).toMatchSnapshot();
});

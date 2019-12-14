import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesEmpty from "./favorites-empty";

it(`Favorites empty screen correctly renders`, () => {
  const tree = renderer.create(
      <FavoritesEmpty/>).toJSON();

  expect(tree).toMatchSnapshot();
});

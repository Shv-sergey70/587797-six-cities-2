import React from 'react';
import renderer from 'react-test-renderer';
import {PlacesPageEmpty} from "./places-page-empty";

jest.mock(`../cities-list/cities-list.jsx`, () => `CitiesList`);

it(`Places page empty correctly renders`, () => {
  const tree = renderer.create(
      <PlacesPageEmpty
        currentCity = {{
          name: `Paris`,
          location: {
            latitude: 11,
            longitude: 22,
            zoom: 10
          }
        }}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

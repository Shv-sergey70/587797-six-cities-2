import React from 'react';
import renderer from 'react-test-renderer';
import {Map} from "./map";

it(`Map correctly renders`, () => {
  const tree = renderer.create(
      <Map
        offersLocations = {[
          {
            latitude: 52.3909553943508,
            longitude: 4.85309666406198
          },
          {
            latitude: 52.369553943508,
            longitude: 4.85309666406198
          },
          {
            latitude: 52.3909553943508,
            longitude: 4.929309666406198
          }
        ]}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

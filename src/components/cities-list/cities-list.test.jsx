import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from "./cities-list";

it(`Cities list correctly renders`, () => {
  const tree = renderer.create(
      <CitiesList
        cities = {
          [
            {
              name: `Paris`
            },
            {
              name: `Amsterdam`
            },
            {
              name: `Hamburg`
            }
          ]
        }
        currentCity = {{
          name: `Paris`
        }}
        onCityClick = {() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import {City} from "./city";

it(`City correctly renders`, () => {
  const tree = renderer.create(
      <City
        cityName = {`Paris`}
        isActive = {true}
        onCityClick = {() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import {City} from "./city";

const cityData = {
  name: `Paris`,
  location: {
    latitude: 11,
    longitude: 22,
    zoom: 10
  }
};

describe(`City correctly renders`, () => {
  it(`City is active`, () => {
    const tree = renderer.create(
        <City
          city = {cityData}
          currentCity = {{
            name: `Paris`,
            location: {
              latitude: 11,
              longitude: 22,
              zoom: 10
            }
          }}
          changeCity = {jest.fn()}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`City is not active`, () => {
    const tree = renderer.create(
        <City
          city = {cityData}
          currentCity = {{
            name: `Amsterdam`,
            location: {
              latitude: 11,
              longitude: 22,
              zoom: 10
            }
          }}
          changeCity = {jest.fn()}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from "./cities-list";

jest.mock(`../city/city.jsx`, () => `City`);

const citiesData = [
  {
    name: `Paris`,
    location: {
      latitude: 11,
      longitude: 22,
      zoom: 10
    }
  },
  {
    name: `Brussels`,
    location: {
      latitude: 11,
      longitude: 22,
      zoom: 10
    }
  },
  {
    name: `Amsterdam`,
    location: {
      latitude: 11,
      longitude: 22,
      zoom: 10
    }
  }
];

it(`Cities list correctly renders`, () => {
  const tree = renderer.create(
      <CitiesList
        cities = {citiesData}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

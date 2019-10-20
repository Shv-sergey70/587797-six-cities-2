import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from "./card";

it(`Card correctly renders`, () => {
  const tree = renderer.create(
      <Card
        offer = {
          {
            title: `Beautiful & luxurious apartment at great location`
          }
        }
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

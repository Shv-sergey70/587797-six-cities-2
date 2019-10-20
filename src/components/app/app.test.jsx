import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

it(`App correctly renders`, () => {
  const tree = renderer.create(
      <App
        offers = {
          [
            {
              title: `Beautiful & luxurious apartment at great location`
            },
            {
              title: `Wood and stone place`
            },
            {
              title: `Canal View Prinsengracht`
            },
            {
              title: `Nice, cozy, warm big bed apartment`
            }
          ]
        }
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import WrappedComponent from './test-component';

it(`HoC with-review-form correctly renders`, () => {
  const tree = renderer.create(
      <WrappedComponent/>).toJSON();

  expect(tree).toMatchSnapshot();
});

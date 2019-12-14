import React from 'react';
import renderer from 'react-test-renderer';
import WrappedComponent from './test-component';

it(`HoC with-open correctly renders`, () => {
  const tree = renderer.create(
      <WrappedComponent/>).toJSON();

  expect(tree).toMatchSnapshot();
});

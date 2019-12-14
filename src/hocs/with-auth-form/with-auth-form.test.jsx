import React from 'react';
import renderer from 'react-test-renderer';
import TestWrappedComponent from './test-component';

it(`HoC with-auth-form correctly renders`, () => {
  const tree = renderer.create(
      <TestWrappedComponent/>).toJSON();

  expect(tree).toMatchSnapshot();
});

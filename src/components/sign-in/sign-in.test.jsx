import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from "./sign-in";

jest.mock(`../page-header/page-header.jsx`, () => `PageHeader`);

it(`Sign-in page renders correctly`, () => {
  const tree = renderer.create(<SignIn
    email={`test@test.ru`}
    password={`my_password`}
    onInputKeydown={jest.fn()}
    authorize={jest.fn()}
    isAuth={false}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});

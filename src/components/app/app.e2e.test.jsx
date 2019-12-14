import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from "./app";

Enzyme.configure({adapter: new Adapter()});

jest.mock(`../../notifier`, () => ({
  error: jest.fn(),
}));

it(`App tries to auth`, () => {
  const checkAuthHandler = jest.fn();

  shallow(<App checkAuth={checkAuthHandler}/>);

  expect(checkAuthHandler).toHaveBeenCalledTimes(1);
});

import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SignIn} from "./sign-in";

Enzyme.configure({adapter: new Adapter()});

jest.mock(`../../notifier`, () => ({
  error: jest.fn()
}));

it(`SignIn email & password success keydown`, () => {
  const inputKeydownHandler = jest.fn();

  const signInScreen = shallow(
      <SignIn
        email={`test@test.ru`}
        password={`my_password`}
        onInputKeydown={inputKeydownHandler}
        authorize={jest.fn()}
        isAuth={false}
      />);

  signInScreen.find(`[name="email"]`).simulate(`change`);
  signInScreen.find(`[name="password"]`).simulate(`change`);

  expect(inputKeydownHandler).toHaveBeenCalledTimes(2);
});

describe(`SignIn submit`, () => {
  it(`SignIn email is empty`, () => {
    const inputKeydownHandler = jest.fn();
    const authorizeHandler = jest.fn();
    const preventDefaultHandler = jest.fn();

    const signInScreen = shallow(
        <SignIn
          email={``}
          password={`my_password`}
          onInputKeydown={inputKeydownHandler}
          authorize={authorizeHandler}
          isAuth={false}
        />);

    signInScreen.find(`button.button`).simulate(`click`, {
      preventDefault: preventDefaultHandler
    });

    expect(authorizeHandler).toHaveBeenCalledTimes(0);
  });

  it(`SignIn password is empty`, () => {
    const inputKeydownHandler = jest.fn();
    const authorizeHandler = jest.fn();
    const preventDefaultHandler = jest.fn();

    const signInScreen = shallow(
        <SignIn
          email={`mymail@mail.com`}
          password={``}
          onInputKeydown={inputKeydownHandler}
          authorize={authorizeHandler}
          isAuth={false}
        />);

    signInScreen.find(`button.button`).simulate(`click`, {
      preventDefault: preventDefaultHandler
    });

    expect(authorizeHandler).toHaveBeenCalledTimes(0);
  });

  it(`SignIn form success submit`, () => {
    const inputKeydownHandler = jest.fn();
    const authorizeHandler = jest.fn();
    const preventDefaultHandler = jest.fn();

    const signInScreen = shallow(
        <SignIn
          email={`mymail@mail.com`}
          password={`my_password`}
          onInputKeydown={inputKeydownHandler}
          authorize={authorizeHandler}
          isAuth={false}
        />);

    signInScreen.find(`button.button`).simulate(`click`, {
      preventDefault: preventDefaultHandler
    });

    expect(authorizeHandler).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SignIn} from "./sign-in";

Enzyme.configure({adapter: new Adapter()});

it(`SignIn email success keydown`, () => {
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

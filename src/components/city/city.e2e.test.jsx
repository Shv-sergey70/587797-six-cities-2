import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {City} from "./city";

Enzyme.configure({adapter: new Adapter()});

it(`City title success click`, () => {
  const clickHandler = jest.fn();

  const cityScreen = shallow(
      <City
        cityName = {`Paris`}
        isActive = {true}
        onCityClick = {clickHandler}
      />);

  cityScreen.find(`a.locations__item-link`).simulate(`click`, {
    target: {
      text: `Пелагея`
    }
  });

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

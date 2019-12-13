import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {City} from "./city";

Enzyme.configure({adapter: new Adapter()});

it(`Change city success`, () => {
  const changeCityHandler = jest.fn();

  const cityData = {
    name: `Paris`,
    location: {
      latitude: 11,
      longitude: 22,
      zoom: 10
    }
  };

  const cityScreen = shallow(
      <City
        city = {cityData}
        currentCity = {{}}
        changeCity = {changeCityHandler}
      />);

  cityScreen.find(`a.locations__item-link`).simulate(`click`);

  expect(changeCityHandler).toHaveBeenCalledTimes(1);
  expect(changeCityHandler).toHaveBeenNthCalledWith(1, cityData);
});

import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from "./card";

Enzyme.configure({adapter: new Adapter()});

it(`Card title success click`, () => {
  const clickHandler = jest.fn();

  const welcomeScreen = shallow(
      <Card
        offer = {
          {
            title: `Wood and stone place`,
            onTitleClick: clickHandler
          }
        }
      />);

  welcomeScreen.find(`.place-card__name a`).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

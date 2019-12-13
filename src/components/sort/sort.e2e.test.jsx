import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Sort} from "./sort";

Enzyme.configure({adapter: new Adapter()});

describe(`Menu behavior test`, () => {
  it(`Show menu on click`, () => {
    const openStateChangeHandler = jest.fn();

    const sortScreen = shallow(
        <Sort
          isOpen={false}
          onOpenStateChange={openStateChangeHandler}
          activeSortingType={{
            name: `POPULAR`,
            text: `Popular`
          }}
          changeSortingType={jest.fn()}
        />);

    sortScreen.find(`.places__sorting-type`).simulate(`click`);

    expect(openStateChangeHandler).toHaveBeenCalledTimes(1);
    expect(openStateChangeHandler).toHaveBeenNthCalledWith(1, true);
  });

  it(`Hide menu on click`, () => {
    const openStateChangeHandler = jest.fn();

    const sortScreen = shallow(
        <Sort
          isOpen={true}
          onOpenStateChange={openStateChangeHandler}
          activeSortingType={{
            name: `POPULAR`,
            text: `Popular`
          }}
          changeSortingType={jest.fn()}
        />);

    sortScreen.find(`.places__sorting-type`).simulate(`click`);

    expect(openStateChangeHandler).toHaveBeenCalledTimes(1);
    expect(openStateChangeHandler).toHaveBeenNthCalledWith(1, false);
  });
});

describe(`Sort list behavior test`, () => {
  it(`Sort type success changing on click`, () => {
    const openStateChangeHandler = jest.fn();
    const sortingTypeChangeHandler = jest.fn();

    const sortScreen = shallow(
        <Sort
          isOpen={true}
          onOpenStateChange={openStateChangeHandler}
          activeSortingType={{
            name: `PRICE_LOW_TO_HIGH`,
            text: `Price: low to high`
          }}
          changeSortingType={sortingTypeChangeHandler}
        />);

    sortScreen.find(`.places__option`).first().simulate(`click`);

    expect(sortingTypeChangeHandler).toHaveBeenCalledTimes(1);
    expect(sortingTypeChangeHandler).toHaveBeenNthCalledWith(1, {
      name: `POPULAR`,
      text: `Popular`
    });
    expect(openStateChangeHandler).toHaveBeenCalledTimes(1);
    expect(openStateChangeHandler).toHaveBeenNthCalledWith(1, false);
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import {Sort} from "./sort";

describe(`Sort section renders`, () => {
  it(`Sort section is open`, () => {
    const tree = renderer.create(<Sort
      isOpen={true}
      openStateChange={jest.fn()}
      activeSortingType={{
        name: `POPULAR`,
        text: `Popular`
      }}
      changeSortingType={jest.fn()}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Sort section is closed`, () => {
    const tree = renderer.create(<Sort
      isOpen={false}
      openStateChange={jest.fn()}
      activeSortingType={{
        name: `PRICE_HIGH_TO_LOW`,
        text: `Price: high to low`
      }}
      changeSortingType={jest.fn()}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WrappedComponent, {TestComponent} from './test-component';

Enzyme.configure({adapter: new Adapter()});

it(`Changes state successfully`, () => {
  const hoc = mount(
      <WrappedComponent/>);

  hoc.find(TestComponent).find(`div`).simulate(`click`);

  expect(hoc.state(`isOpen`)).toEqual(true);
});

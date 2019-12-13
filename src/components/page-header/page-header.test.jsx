import React from 'react';
import renderer from 'react-test-renderer';
import {PageHeader} from "./page-header";
import {BrowserRouter} from 'react-router-dom';

describe(`PageHeader renders`, () => {
  it(`User not authorized`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <PageHeader userEmail={``}/>
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`User authorized`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <PageHeader userEmail={`test@test.ru`}/>
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

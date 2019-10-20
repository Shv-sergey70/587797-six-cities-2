import React from 'react';
import ReactDom from 'react-dom';
import {App} from "./components/app/app";

const offersData = [
  {
    title: `Beautiful & luxurious apartment at great location`
  },
  {
    title: `Wood and stone place`
  },
  {
    title: `Canal View Prinsengracht`
  },
  {
    title: `Nice, cozy, warm big bed apartment`
  }
];

const init = () => {
  ReactDom.render(
      <App
        offers = {offersData}
      />,
      document.querySelector(`#root`)
  );
};

init();

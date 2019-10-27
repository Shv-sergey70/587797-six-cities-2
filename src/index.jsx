import React from 'react';
import ReactDom from 'react-dom';
import {App} from "./components/app/app";
import {offersData} from "./mocks/offers";

const init = () => {
  ReactDom.render(
      <App
        offers = {offersData}
      />,
      document.querySelector(`#root`)
  );
};

init();

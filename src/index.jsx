import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {reducer} from "./reducer";
import {Provider} from 'react-redux';
import {App} from "./components/app/app";
import {offersData} from "./mocks/offers";

const init = () => {
  const store = createStore(reducer);

  ReactDom.render(
      <Provider store={store}>
        <App
          allOffers = {offersData}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();

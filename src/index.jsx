import React from 'react';
import ReactDom from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {reducer} from "./reducer";
import {Provider} from 'react-redux';
import {App} from "./components/app/app";
import {offersData} from "./mocks/offers";
import configureAPI from "./api";
import {compose} from "recompose";
import thunk from "redux-thunk";

const init = () => {
  const api = configureAPI((...args) => store.dispatch(...args));

  const store = createStore(reducer, compose(
      applyMiddleware(thunk.withExtraArgument(api)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  ));

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

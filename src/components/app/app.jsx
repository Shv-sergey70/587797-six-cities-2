import React from 'react';
import {MainPage} from "../main-page/main-page";
import PropTypes from 'prop-types';
import {offerPropTypes} from "../card/card";

export const App = (props) => {
  const {offers} = props;

  return <MainPage
    offers = {offers}
  />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

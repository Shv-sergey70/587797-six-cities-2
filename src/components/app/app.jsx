import React from 'react';
import {MainPage} from "../main-page/main-page";
import PropTypes from 'prop-types';
import {offerPropTypes} from "../card/card";
import {OfferDetail} from "../offer-detail/offer-detail";

const getPageScreen = (props) => {
  switch (true) {
    case /^\/offer\/\d$/.test(location.pathname):
      const offerId = location.pathname.match(/^\/offer\/(\d)$/)[1];
      console.log(props);
      return <OfferDetail offer={props} />;
    default:
      return <MainPage offers = {props} />;
  }
};

export const App = (props) => {
  const {offers} = props;

  return getPageScreen(offers);
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

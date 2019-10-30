import React from 'react';
import {MainPage} from "../main-page/main-page";
import PropTypes from 'prop-types';
import {offerPropTypes} from "../card/card";
import {OfferDetail} from "../offer-detail/offer-detail";

const getPageScreen = (offers) => {
  switch (true) {
    case /^\/offer\/\d$/.test(location.pathname):
      const offerId = Number(location.pathname.match(/^\/offer\/(\d)$/)[1]);
      const selectedOffer = offers.find((offer) => offer.id === offerId);

      if (selectedOffer !== undefined) {
        return <OfferDetail offer={selectedOffer} />;
      }

      return <MainPage offers = {offers} />;
    default:
      return <MainPage offers = {offers} />;
  }
};

export const App = (props) => {
  const {offers} = props;

  return getPageScreen(offers);
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

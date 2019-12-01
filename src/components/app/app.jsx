import React from 'react';
import MainPage from "../main-page/main-page";
import PropTypes from 'prop-types';
import {offerPropTypes} from "../card/card";
import {OfferDetail} from "../offer-detail/offer-detail";

const App = (props) => {
  const {
    allOffers,
  } = props;

  if (/^\/offer\/\d$/.test(location.pathname)) {
    const offerId = Number(location.pathname.match(/^\/offer\/(\d)$/)[1]);
    const selectedOffer = allOffers.find((offer) => offer.id === offerId);

    if (selectedOffer !== undefined) {
      return <OfferDetail offer={selectedOffer} />;
    }
  }

  return <MainPage
    allOffers = {allOffers}
  />;
};

App.propTypes = {
  allOffers: PropTypes.arrayOf(offerPropTypes),
};

export {App};

import React from 'react';
import {MainPage} from "../main-page/main-page";
import PropTypes from 'prop-types';
import {offerPropTypes} from "../card/card";
import {OfferDetail} from "../offer-detail/offer-detail";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";
import {cityPropTypes} from "../cities-list/cities-list";

const App = (props) => {
  const {
    allOffers,
    currentOffers,
    currentCity,
    onCityClick
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
    currentOffers = {currentOffers}
    currentCity = {currentCity}
    onCityClick = {onCityClick}
  />;
};

App.propTypes = {
  allOffers: PropTypes.arrayOf(offerPropTypes),
  currentCity: cityPropTypes,
  currentOffers: PropTypes.arrayOf(offerPropTypes),
  onCityClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.currentCity,
  currentOffers: state.currentOffers
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (cityName) => dispatch(ActionCreator.changeCity(cityName))
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

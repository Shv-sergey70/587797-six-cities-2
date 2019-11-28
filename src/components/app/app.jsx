import React from 'react';
import {MainPage} from "../main-page/main-page";
import PropTypes from 'prop-types';
import {offerPropTypes} from "../card/card";
import {OfferDetail} from "../offer-detail/offer-detail";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";

const App = (props) => {
  const {
    offers,
    currentCity,
    onCityClick
  } = props;

  if (/^\/offer\/\d$/.test(location.pathname)) {
    const offerId = Number(location.pathname.match(/^\/offer\/(\d)$/)[1]);
    const selectedOffer = offers.find((offer) => offer.id === offerId);

    if (selectedOffer !== undefined) {
      return <OfferDetail offer={selectedOffer} />;
    }
  }

  return <MainPage
    offers = {offers}
    currentCity = {currentCity}
    onCityClick = {onCityClick}
  />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  currentCity: PropTypes.object, // @todo Тут тоже
  offersList: PropTypes.array, // @todo  Чет написать
  onCityClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.currentCity,
  offersList: state.offersList
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: () => dispatch(ActionCreator.changeCity())
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

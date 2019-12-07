import React from 'react';
import MainPage from "../main-page/main-page";
import PropTypes from 'prop-types';
import {offerPropTypes} from "../card/card";
import {OfferDetail} from "../offer-detail/offer-detail";
import {Switch, Route} from 'react-router-dom';
import SignIn from "../sign-in/sign-in";
import {withAuthForm} from "../../hocs/with-auth-form/with-auth-form";

const SignInWrapped = withAuthForm(SignIn);

const App = (props) => {
  const {
    allOffers,
  } = props;

  return <Switch>
    <Route path="/" exact component={() => {
      return <MainPage
        allOffers = {allOffers}
      />;
    }}/>
    <Route path="/login" exact component={() => {
      return <SignInWrapped/>;
    }}/>
    <Route
      render={() => (
        <h1>404</h1>
      )}/>
  </Switch>;

  // if (/^\/offer\/\d$/.test(location.pathname)) {
  //   const offerId = Number(location.pathname.match(/^\/offer\/(\d)$/)[1]);
  //   const selectedOffer = allOffers.find((offer) => offer.id === offerId);
  //
  //   if (selectedOffer !== undefined) {
  //     return <OfferDetail offer={selectedOffer} />;
  //   }
  // }
};

App.propTypes = {
  allOffers: PropTypes.arrayOf(offerPropTypes),
};

export {App};

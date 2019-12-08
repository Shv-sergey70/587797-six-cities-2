import React from 'react';
import MainPage from "../main-page/main-page";
import PropTypes from 'prop-types';
import {OfferDetail} from "../offer-detail/offer-detail";
import {Switch, Route} from 'react-router-dom';
import SignIn from "../sign-in/sign-in";
import {withAuthForm} from "../../hocs/with-auth-form/with-auth-form";
import {connect} from "react-redux";
import Operation from '../../operation';
import {Route as AppRoute} from '../../const/routes';
import FavoritesPage from "../favorites-page/favorites-page";

const SignInWrapped = withAuthForm(SignIn);

const App = (props) => {
  const {
    checkAuth
  } = props;

  checkAuth();

  return <Switch>
    <Route path={AppRoute.MAIN} exact component={MainPage}/>
    <Route path={AppRoute.LOGIN} exact component={SignInWrapped}/>
    <Route path={AppRoute.FAVORITES} exact component={FavoritesPage}/>
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
  checkAuth: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => dispatch(Operation.checkAuth()),
  };
};

export {App};
export default connect(null, mapDispatchToProps)(App);

import React from 'react';
import MainPage from "../main-page/main-page";
import OfferDetail from "../offer-detail/offer-detail";
import {Switch, Route} from 'react-router-dom';
import SignIn from "../sign-in/sign-in";
import {withAuthForm} from "../../hocs/with-auth-form/with-auth-form";
import {Route as AppRoute} from '../../const/routes';
import FavoritesPage from "../favorites-page/favorites-page";
import Operation from "../../operation";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const SignInWrapped = withAuthForm(SignIn);

class App extends React.PureComponent {
  componentDidMount() {
    const {
      checkAuth
    } = this.props;

    checkAuth();
  }

  render() {
    return <Switch>
      <Route path={AppRoute.MAIN} exact component={MainPage}/>
      <Route path={AppRoute.LOGIN} exact component={SignInWrapped}/>
      <Route path={AppRoute.FAVORITES} exact component={FavoritesPage}/>
      <Route path={AppRoute.OFFER} exact component={OfferDetail}/>
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
  }
}

App.propTypes = {
  checkAuth: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(Operation.checkAuth()),
});

export {App};

export default connect(null, mapDispatchToProps)(App);

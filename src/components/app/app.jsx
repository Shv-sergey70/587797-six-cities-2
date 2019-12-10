import React from 'react';
import MainPage from "../main-page/main-page";
import PropTypes from 'prop-types';
import OfferDetail from "../offer-detail/offer-detail";
import {Switch, Route} from 'react-router-dom';
import SignIn from "../sign-in/sign-in";
import {withAuthForm} from "../../hocs/with-auth-form/with-auth-form";
import {connect} from "react-redux";
import Operation from '../../operation';
import {Route as AppRoute} from '../../const/routes';
import FavoritesPage from "../favorites-page/favorites-page";

const SignInWrapped = withAuthForm(SignIn);

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      checkAuth,
      loadOffers
    } = this.props;

    checkAuth();
    loadOffers();
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
  checkAuth: PropTypes.func.isRequired,
  loadOffers: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(Operation.checkAuth()),
  loadOffers: () => dispatch(Operation.loadOffers())
});

export {App};
export default connect(null, mapDispatchToProps)(App);

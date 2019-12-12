import React from 'react';
import PropTypes from "prop-types";
import offerPropTypes from "../../prop-types/offer";
import {connect} from "react-redux";
import Selectors from '../../selector';
import PageHeader from '../page-header/page-header';
import PlacesPage from "../places-page/places-page";
import PlacesPageEmpty from "../places-page-empty/places-page-empty";
import Operation from "../../operation";

class MainPage extends React.PureComponent {
  componentDidMount() {
    const {
      loadOffers
    } = this.props;

    loadOffers();
  }

  render() {
    const {
      currentOffers
    } = this.props;

    return <div className="page page--gray page--main">
      <PageHeader/>

      {currentOffers.length > 0 ? <PlacesPage/> : <PlacesPageEmpty/>}
    </div>;
  }
}

MainPage.propTypes = {
  currentOffers: PropTypes.arrayOf(offerPropTypes),
  loadOffers: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentOffers: Selectors.getCurrentOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadOffers: () => dispatch(Operation.loadOffers())
});

export {MainPage};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

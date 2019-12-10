import React from 'react';
import PropTypes from "prop-types";
import {offerPropTypes} from "../card/card";
import {OffersList} from "../offers-list/offers-list";
import CitiesList, {cityPropTypes} from "../cities-list/cities-list";
import {Map} from "../map/map";
import {withActiveItem} from "../../hocs/with-active-item/with-active-item";
import {connect} from "react-redux";
import Selectors from '../../selector';
import PageHeader from '../page-header/page-header';
import Operation from "../../operation";

const CitiesListWrapped = withActiveItem(CitiesList);
const OffersListWrapped = withActiveItem(OffersList);

class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      loadOffers
    } = this.props;

    loadOffers();
  }

  render() {
    const {
      currentOffers,
      currentCity
    } = this.props;


    return <div className="page page--gray page--main">
      <PageHeader/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesListWrapped
              defaultActiveItem={currentCity}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"> </use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <OffersListWrapped
                offers={currentOffers}
                defaultActiveItem={0}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offersLocations={currentOffers.map((offer) => offer.location)}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>;
  }
}

MainPage.propTypes = {
  currentCity: cityPropTypes,
  currentOffers: PropTypes.arrayOf(offerPropTypes),
  loadOffers: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.currentCity,
  currentOffers: Selectors.getCurrentOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadOffers: () => dispatch(Operation.loadOffers())
});

export {MainPage};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

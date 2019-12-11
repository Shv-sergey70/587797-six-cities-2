import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Map from "../map/map";
import CitiesList, {cityPropTypes} from "../cities-list/cities-list";
import offerPropTypes from "../../prop-types/offer";
import Selectors from "../../selector";
import OffersList from "../offers-list/offers-list";

const PlacesPage = (props) => {
  const {
    currentCity,
    currentOffers
  } = props;

  return <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <section className="locations container">
        <CitiesList
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
          <OffersList
            offers={currentOffers}
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
  </main>;
};

PlacesPage.propTypes = {
  currentCity: cityPropTypes,
  currentOffers: PropTypes.arrayOf(offerPropTypes)
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.currentCity,
  currentOffers: Selectors.getCurrentOffers(state)
});

export {PlacesPage};

export default connect(mapStateToProps)(PlacesPage);

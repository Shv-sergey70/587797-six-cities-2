import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import offerPropTypes from "../../prop-types/offer";
import Selectors from "../../selector";
import {OffersList} from "../offers-list/offers-list";
import Sort from "../sort/sort";
import {withOpen} from "../../hocs/with-open/with-open";
import cityPropTypes from '../../prop-types/city';

const SortWrapped = withOpen(Sort);

const PlacesPage = (props) => {
  const {
    currentCity,
    currentOffers
  } = props;

  return <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <section className="locations container">
        <CitiesList/>
      </section>
    </div>
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
          <SortWrapped/>
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

import React from 'react';
import {connect} from "react-redux";
import CitiesList, {cityPropTypes} from "../cities-list/cities-list";

const PlacesPageEmpty = (props) => {
  const {
    currentCity
  } = props;

  return <main className="page__main page__main--index page__main--index-empty">
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <CitiesList
            defaultActiveItem={currentCity}
          />
        </ul>
      </section>
    </div>
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in
              {currentCity.name}</p>
          </div>
        </section>
        <div className="cities__right-section"/>
      </div>
    </div>
  </main>;
};

PlacesPageEmpty.propTypes = {
  currentCity: cityPropTypes
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.currentCity,
});

export {PlacesPageEmpty};

export default connect(mapStateToProps)(PlacesPageEmpty);

import React from 'react';
import PropTypes from 'prop-types';
import {City} from "../city/city";

export class CitiesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this._onCardHover = this._onCardHover.bind(this);
  }

  render() {
    const {cities, currentCity} = this.props;

    return <ul className="locations__list tabs__list">
      {cities.map((city, i) => <City
        key = {`city-${i}`}
        cityName = {city.name}
        isActive = {city.name === currentCity.name}
      />)}
    </ul>;
  }

  _onCardHover(activeCardData) {
    this.setState(() => ({activeCard: activeCardData}));
  }
}

CitiesList.propTypes = {
  cities: PropTypes.array, // @ todo fix it
  currentCity: PropTypes.object
};

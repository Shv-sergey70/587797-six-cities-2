import React from 'react';
import PropTypes from 'prop-types';
import {City} from "../city/city";

export class CitiesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this._onCardHover = this._onCardHover.bind(this);
  }

  render() {
    const {
      cities,
      currentCity,
      onCityClick
    } = this.props;

    return <ul className="locations__list tabs__list">
      {cities.map((city, i) => <City
        key = {`city-${i}`}
        cityName = {city.name}
        isActive = {city.name === currentCity.name}
        onCityClick = {onCityClick}
      />)}
    </ul>;
  }

  _onCardHover(activeCardData) {
    this.setState(() => ({activeCard: activeCardData}));
  }
}

const cityPropTypes = PropTypes.exact({
  name: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`])
});

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(cityPropTypes),
  currentCity: PropTypes.object,
  onCityClick: PropTypes.func.isRequired
};

export {cityPropTypes};

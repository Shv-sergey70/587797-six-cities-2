import React from 'react';
import PropTypes from 'prop-types';
import {City} from "../city/city";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";

export class CitiesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this._onCardHover = this._onCardHover.bind(this);
    this._handleCityChange = this._handleCityChange.bind(this);
  }

  render() {
    const {
      cities,
      activeItem
    } = this.props;

    return <ul className="locations__list tabs__list">
      {cities.map((city, i) => <City
        key = {`city-${i}`}
        cityName = {city.name}
        isActive = {city.name === activeItem}
        onCityClick = {this._handleCityChange}
      />)}
    </ul>;
  }

  _onCardHover(activeCardData) {
    this.setState(() => ({activeCard: activeCardData}));
  }

  _handleCityChange(evt) {
    const {
      onCityClick,
      changeActiveItem
    } = this.props;

    const cityName = evt.target.innerText;

    onCityClick(cityName);
    changeActiveItem(cityName);
  }
}

const cityPropTypes = PropTypes.exact({
  name: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`])
});

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(cityPropTypes),
  onCityClick: PropTypes.func.isRequired,
  activeItem: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]).isRequired,
  changeActiveItem: PropTypes.func.isRequired
};

export {cityPropTypes};

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (cityName) => dispatch(ActionCreator.changeCity(cityName))
});

export default connect(null, mapDispatchToProps)(CitiesList);

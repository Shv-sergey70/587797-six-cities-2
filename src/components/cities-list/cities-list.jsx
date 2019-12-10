import React from 'react';
import PropTypes from 'prop-types';
import {City} from "../city/city";
import ActionCreator from "../../action-creator";
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
        isActive = {city.name === activeItem.name}
        onCityClick = {this._handleCityChange}
      />)}
    </ul>;
  }

  _onCardHover(activeCardData) {
    this.setState(() => ({activeCard: activeCardData}));
  }

  _handleCityChange(evt) {
    const {
      cities,
      onCityClick,
      changeActiveItem
    } = this.props;

    const cityName = evt.target.innerText;
    const newCity = cities.find((city) => city.name === cityName);

    onCityClick(newCity);
    changeActiveItem(newCity);
  }
}

export const offerLocationPropTypes = PropTypes.exact({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired
});

const cityPropTypes = PropTypes.exact({
  name: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]),
  location: offerLocationPropTypes
});

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(cityPropTypes),
  onCityClick: PropTypes.func.isRequired,
  activeItem: cityPropTypes,
  changeActiveItem: PropTypes.func.isRequired
};

export {cityPropTypes};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cities: state.cities
});
const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => dispatch(ActionCreator.changeCity(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

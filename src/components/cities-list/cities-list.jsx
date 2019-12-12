import React from 'react';
import PropTypes from 'prop-types';
import {City} from "../city/city";
import ActionCreator from "../../action-creator";
import {connect} from "react-redux";
import cityPropTypes from '../../prop-types/city';

export class CitiesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleCityChange = this._handleCityChange.bind(this);
  }

  render() {
    const {
      cities,
      defaultActiveItem
    } = this.props;

    if (!defaultActiveItem || !cities) {
      return null;
    }

    return <ul className="locations__list tabs__list">
      {cities.map((city, i) => <City
        key = {`city-${i}`}
        cityName = {city.name}
        isActive = {city.name === defaultActiveItem.name}
        onCityClick = {this._handleCityChange}
      />)}
    </ul>;
  }

  _handleCityChange(evt) {
    const {
      cities,
      onCityClick
    } = this.props;

    const cityName = evt.target.innerText;
    const newCity = cities.find((city) => city.name === cityName);

    onCityClick(newCity);
  }
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(cityPropTypes),
  onCityClick: PropTypes.func.isRequired,
  defaultActiveItem: cityPropTypes
};

export {cityPropTypes};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cities: state.cities
});
const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => dispatch(ActionCreator.changeCity(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

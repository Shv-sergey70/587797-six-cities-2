import React from 'react';
import PropTypes from 'prop-types';
import ActionCreator from "../../action-creator";
import {connect} from "react-redux";
import cityPropTypes from "../../prop-types/city";

class City extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleCityChange = this._handleCityChange.bind(this);
  }

  _handleCityChange() {
    const {
      city,
      changeCity
    } = this.props;

    changeCity(city);
  }

  render() {
    const {
      city,
      currentCity,
    } = this.props;

    return <li className="locations__item">
      <a className={`locations__item-link tabs__item ${city.name === currentCity.name ? `tabs__item--active` : ``}`} href="#" onClick={this._handleCityChange}>
        <span>{city.name}</span>
      </a>
    </li>;
  }
}

City.propTypes = {
  city: cityPropTypes,
  currentCity: cityPropTypes,
  changeCity: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.currentCity
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => dispatch(ActionCreator.changeCity(city))
});

export {City};

export default connect(mapStateToProps, mapDispatchToProps)(City);

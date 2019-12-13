import React from 'react';
import PropTypes from 'prop-types';
import City from "../city/city";
import {connect} from "react-redux";
import cityPropTypes from '../../prop-types/city';

const CitiesList = (props) => {
  const {
    cities
  } = props;

  return <ul className="locations__list tabs__list">
    {cities.map((city, i) => <City
      key = {`city-${i}`}
      city = {city}
    />)}
  </ul>;
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(cityPropTypes)
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cities: state.cities
});

export {CitiesList};

export default connect(mapStateToProps)(CitiesList);

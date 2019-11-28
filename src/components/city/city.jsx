import React from 'react';
import PropTypes from 'prop-types';

export const City = (props) => {
  const {
    cityName,
    isActive
  } = props;

  return <li className="locations__item">
    <a className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`} href="#">
      <span>{cityName}</span>
    </a>
  </li>;
};

City.propTypes = {
  cityName: PropTypes.string,
  isActive: PropTypes.bool
};

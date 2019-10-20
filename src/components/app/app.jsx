import React from 'react';
import {MainPage} from "../main-page/main-page";
import PropTypes from 'prop-types';

export const App = (props) => {
  const {offers} = props;

  return <MainPage
    offers = {offers}
  />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.oneOf([`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`])
      })
  )
};

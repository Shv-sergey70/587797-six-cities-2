import React from 'react';
import {MainPage} from "../main-page/main-page";
import PropTypes from 'prop-types';
import {offerPropTypes} from "../card/card";

const getPageScreen = (props) => {
  console.log(location.pathname);
  switch(location.pathname) {
    case `/`:
      return <FirstPage someProp={props.firstPageProp} />;
    case `/second-page`:
      return <SecondPage someProp={props.secondPageProp} />;
  }
}

const App = (props) => {
  return <React.Fragment>{getPageScreen(props)}</React.Fragment>;
}

export const App = (props) => {
  const {offers} = props;

  return <MainPage
    offers = {offers}
  />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

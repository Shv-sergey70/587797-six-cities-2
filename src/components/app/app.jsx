import React from 'react';
import {MainPage} from "../main-page/main-page";
import PropTypes from 'prop-types';
import {offerPropTypes} from "../card/card";
import {OfferDetail} from "../offer-detail/offer-detail";

const getPageScreen = (props) => {
  console.log(location.pathname);
  console.log(/^offer\/\d$/.test(location.pathname));
  // switch(location.pathname) {
  //   case `/`:
      return <MainPage offers = {props.firstPageProp} />;
  //   case `/offer/:id`:
  //     return <OfferDetail offer={props.secondPageProp} />;
  // }
};

export const App = (props) => {
  const {offers} = props;

  return <React.Fragment>{getPageScreen(props)}</React.Fragment>;
  // return <MainPage
  //   offers = {offers}
  // />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

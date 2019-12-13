import React from 'react';
import PropTypes from 'prop-types';
import Card from "../card/card";
import offerPropTypes from '../../prop-types/offer';

const OffersList = (props) => {
  const {
    offers
  } = props;

  return <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => <Card
      key={`card-${offer.id}-${offer.isFavorite}`}
      offer={offer}
    />)}
  </div>;
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

export {OffersList};

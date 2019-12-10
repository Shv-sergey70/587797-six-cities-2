import React from 'react';
import PropTypes from 'prop-types';
import FavoritesItemOffer from "../favorites-item-offer/favorites-item-offer";

const FavoritesListItem = (props) => {
  const {
    cityName,
    offers
  } = props;

  return <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{cityName}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {offers.map((offer) => <FavoritesItemOffer
        key={`${cityName}-${offer.id}`}
        offer={offer}
      />
      )}
    </div>
  </li>;
};

FavoritesListItem.propTypes = {
  cityName: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired // fix it
};

export {FavoritesListItem};

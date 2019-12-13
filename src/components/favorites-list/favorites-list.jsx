import React from 'react';
import PropTypes from 'prop-types';
import Selectors from "../../selector";
import {connect} from "react-redux";
import FavoritesListItem from "../favorites-list-item/favorites-list-item";

const FavoritesList = (props) => {
  const {
    offersByCities
  } = props;

  return <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {Object.keys(offersByCities).map((cityName, i) => <FavoritesListItem
            key={`${cityName}-${i}`}
            cityName={cityName}
            offers={offersByCities[cityName]}
          />
          )}
        </ul>
      </section>
    </div>
  </main>;
};

FavoritesList.propTypes = {
  offersByCities: PropTypes.object
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offersByCities: Selectors.getFavoriteOffersByCities(state)
});

export {FavoritesList};

export default connect(mapStateToProps)(FavoritesList);

import React from 'react';
import PropTypes from 'prop-types';
import {getRatingPercent} from "../../utils";
import {MAX_RATING_VALUE, FavoritesStatus} from "../../const/common";
import Operation from "../../operation";
import {connect} from "react-redux";

class FavoritesItemOffer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._removeFromFavorites = this._removeFromFavorites.bind(this);
  }

  render() {
    const {
      offer
    } = this.props;

    const {
      id,
      title,
      previewImage,
      price,
      type,
      rating
    } = offer;

    return <article className="favorites__card place-card" key={`favorite-item${id}`}>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button"
            onClick={() => this._removeFromFavorites(id)}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref={`#icon-bookmark`}/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingPercent(rating, MAX_RATING_VALUE)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>;
  }

  _removeFromFavorites(id) {
    const {
      toggleFavoriteHotel
    } = this.props;

    toggleFavoriteHotel(id, FavoritesStatus.UNSET);
  };
}

FavoritesItemOffer.propTypes = {
  offer: PropTypes.object.isRequired, // fix it
  toggleFavoriteHotel: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavoriteHotel: (offerId, isSetFavorite) => dispatch(Operation.toggleFavoriteHotel(offerId, isSetFavorite))
});

export {FavoritesItemOffer};

export default connect(null, mapDispatchToProps)(FavoritesItemOffer);

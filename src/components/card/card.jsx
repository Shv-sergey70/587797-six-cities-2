import React from 'react';
import PropTypes from 'prop-types';
import {MAX_RATING_VALUE} from "../../const/common";
import {connect} from "react-redux";
import Operation from "../../operation";
import {getRatingPercent} from "../../utils";
import ActionCreator from "../../action-creator";

class Card extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleToggleFavoriteButtonClick = this._handleToggleFavoriteButtonClick.bind(this);
  }

  render() {
    const {
      offer,
      onTitleClick,
      onCardClick,
      changeActiveOffer
    } = this.props;

    const {
      id,
      title,
      previewImage,
      isPremium,
      isFavorite,
      type,
      price,
      rating
    } = offer;

    return <article className="cities__place-card place-card" onClick={() => {
      // onCardClick(id);
    }} onMouseOver={() => {
      changeActiveOffer(offer.location); // @todo make class method
    }} onMouseLeave={() => {
      changeActiveOffer(null); // @todo make class method
    }}>
      {isPremium
        ? <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`}
            type="button"
            onClick={this._handleToggleFavoriteButtonClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingPercent(rating, MAX_RATING_VALUE)}%`}}> </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`offer/${id}`} onClick={onTitleClick}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>;
  }

  _handleToggleFavoriteButtonClick(evt) {
    const {
      offer,
      toggleFavoriteHotel
    } = this.props;

    evt.preventDefault();

    console.log(`Current is favorite`, offer.isFavorite);

    toggleFavoriteHotel(offer.id, !offer.isFavorite);
  }
}

export const offerPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
});

Card.propTypes = {
  offer: offerPropTypes,
  onTitleClick: PropTypes.func,
  onCardClick: PropTypes.func,
  toggleFavoriteHotel: PropTypes.func,
  changeActiveOffer: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavoriteHotel: (offerId, isSetFavorite) => dispatch(Operation.toggleFavoriteHotel(offerId, isSetFavorite)),
  changeActiveOffer: (location) => dispatch(ActionCreator.changeActiveOffer(location))
});

export {Card};

export default connect(null, mapDispatchToProps)(Card);


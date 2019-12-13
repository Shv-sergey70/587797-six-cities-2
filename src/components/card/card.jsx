import React from 'react';
import PropTypes from 'prop-types';
import {MAX_RATING_VALUE} from "../../const/common";
import {connect} from "react-redux";
import Operation from "../../operation";
import {getRatingPercent} from "../../utils";
import {Link} from 'react-router-dom';
import offerPropTypes from '../../prop-types/offer';

class Card extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleToggleFavoriteButtonClick = this._handleToggleFavoriteButtonClick.bind(this);
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
  }

  render() {
    const {
      offer: {
        id,
        title,
        previewImage,
        isPremium,
        isFavorite,
        type,
        price,
        rating
      }
    } = this.props;

    return <article className="cities__place-card place-card"
      onMouseEnter={this._handleCardMouseEnter} onMouseLeave={this._handleCardMouseLeave}>
      {isPremium
        ? <div className="place-card__mark"><span>Premium</span></div>
        : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>;
  }

  _handleToggleFavoriteButtonClick() {
    const {
      offer,
      toggleFavoriteHotel
    } = this.props;

    toggleFavoriteHotel(offer.id, !offer.isFavorite);
  }

  _handleCardMouseEnter() {
    const {
      offer: {
        id
      },
      changeActiveOffer
    } = this.props;

    changeActiveOffer(id);
  }

  _handleCardMouseLeave() {
    const {
      changeActiveOffer
    } = this.props;

    changeActiveOffer(null);
  }
}

Card.propTypes = {
  offer: offerPropTypes,
  toggleFavoriteHotel: PropTypes.func,
  changeActiveOffer: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavoriteHotel: (offerId, isSetFavorite) => dispatch(Operation.toggleFavoriteHotel(offerId, isSetFavorite)),
});

export {Card};

export default connect(null, mapDispatchToProps)(Card);


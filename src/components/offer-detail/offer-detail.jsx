import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {MAX_RATING_VALUE} from "../../const/common";
import ActionCreator from "../../action-creator";
import Operation from '../../operation';
import {ReviewItem} from "../review-item/review-item";

class OfferDetail extends React.PureComponent {
  constructor(props) {
    super(props);

    const {
      offers
    } = props;

    this._currentOfferId = Number(props.match.params.offerId);
    this._currentOffer = null;

    console.log(props, this._currentOfferId, offers);
  }

  componentDidUpdate() {
    const {
      offers,
      setCurrentOfferDetail,
      currentOfferDetail,
      loadCommentsForOffer
    } = this.props;

    this._currentOffer = currentOfferDetail;

    if (!this._currentOffer) {
      setCurrentOfferDetail(offers.find((offer) => offer.id === this._currentOfferId));
      loadCommentsForOffer(this._currentOfferId);
    }
  }

  render() {
    const {
      currentOfferDetail,
      currentComments
    } = this.props;

    if (currentOfferDetail === null) {
      return null;
    }

    console.log(currentComments, currentOfferDetail);

    const {
      title,
      images,
      bedrooms,
      maxAdults,
      goods,
      isPremium,
      isFavorite,
      type,
      price,
      rating,
      host,
      description
    } = currentOfferDetail;

    return <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {images.map((imageSrc, i) => <div key={`image-${i}`} className="property__image-wrapper">
            <img className="property__image" src={imageSrc} alt="Photo studio"/>
          </div>)}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium
            ? <div className="property__mark">
              <span>Premium</span>
            </div>
            : ``}
          <div className="property__name-wrapper">
            <h1 className="property__name">{title}</h1>
            <button className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`} type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: `${Math.round(rating * 100 / MAX_RATING_VALUE)}%`}}> </span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">{type}</li>
            <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
            <li className="property__feature property__feature--adults">Max {maxAdults} adults</li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {goods.map((item, i) => <li key={`goods-${i}`} className="property__inside-item">{item}</li>)}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
              </div>
              <span className="property__user-name">{host.name}</span>
              {host.isPro ? <span className="property__user-status">Pro</span> : ``}
            </div>
            <div className="property__description">
              <p className="property__text">{description}</p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
            <ul className="reviews__list">
              {currentComments.map((comment) => <ReviewItem
                key={`comment-${comment.id}`}
                comment={comment}
              />)}
            </ul>
            <form className="reviews__form form" action="#" method="post">
              <label className="reviews__label form__label" htmlFor="review">Your review</label>
              <div className="reviews__rating-form form__rating">
                <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>
              </div>
              <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"/>
              <div className="reviews__button-wrapper">
                <p className="reviews__help">
                  To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
                  stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <section className="property__map map"/>
    </section>;
  }
}

OfferDetail.propTypes = {
  offers: PropTypes.array,
  currentOfferDetail: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      offerId: PropTypes.string.isRequired
    })
  }),
  setCurrentOfferDetail: PropTypes.func.isRequired,
  loadCommentsForOffer: PropTypes.func.isRequired,
  currentComments: PropTypes.array
  // offer: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   title: PropTypes.oneOf([
  //     `Beautiful & luxurious apartment at great location`,
  //     `Wood and stone place`,
  //     `Canal View Prinsengracht`,
  //     `Nice, cozy, warm big bed apartment`
  //   ]).isRequired,
  //   bedrooms: PropTypes.number.isRequired,
  //   maxAdults: PropTypes.number.isRequired,
  //   images: PropTypes.array.isRequired,
  //   goods: PropTypes.arrayOf(PropTypes.oneOf([
  //     `Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`
  //   ])).isRequired,
  //   isPremium: PropTypes.bool.isRequired,
  //   isFavorite: PropTypes.bool.isRequired,
  //   type: PropTypes.oneOf([`Apartment`, `Private room`]),
  //   price: PropTypes.number.isRequired,
  //   rating: PropTypes.number.isRequired,
  //   host: PropTypes.shape({
  //     isPro: PropTypes.bool.isRequired,
  //     name: PropTypes.string.isRequired,
  //     avatar: PropTypes.string.isRequired
  //   }),
  //   description: PropTypes.string.isRequired
  // })
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.offers,
  currentOfferDetail: state.currentOfferDetail,
  currentComments: state.currentComments
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentOfferDetail: (currentOffer) => dispatch(ActionCreator.setCurrentOfferDetail(currentOffer)),
  loadCommentsForOffer: (offerId) => dispatch(Operation.loadCommentsForOffer(offerId))
});

export {OfferDetail};
export default connect(mapStateToProps, mapDispatchToProps)(OfferDetail);

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {MAX_RATING_VALUE} from "../../const/common";
import Operation from '../../operation';
import {ReviewItem} from "../review-item/review-item";
import offerPropTypes from '../../prop-types/offer';
import Card from "../card/card";
import Selectors from '../../selector';
import Map from "../map/map";
import PageHeader from "../page-header/page-header";

class OfferDetail extends React.PureComponent {
  constructor(props) {
    super(props);

    this._currentOfferId = Number(props.match.params.offerId);
    this._currentOffer = null;

    this._loadDataForOffer = this._loadDataForOffer.bind(this);
    this._getImagesForRender = this._getImagesForRender.bind(this);
    this._handleToggleFavoriteButtonClick = this._handleToggleFavoriteButtonClick.bind(this);
  }

  componentDidMount() {
    this._loadDataForOffer();
  }

  render() {
    const {
      currentOfferDetail,
      currentComments,
      nearestOffers,
      toggleFavoriteHotel
    } = this.props;

    if (currentOfferDetail === null) {
      return null;
    }

    const {
      title,
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

    console.log(`Render`, isFavorite);

    return <div className="page">
      <PageHeader/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {this._getImagesForRender().map((imageSrc, i) => <div key={`image-${i}`} className="property__image-wrapper">
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
                <button className={`property__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button"
                  onClick={this._handleToggleFavoriteButtonClick}>
                  <svg className="place-card__bookmark-icon" width="31" height="33">
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
          <section className="property__map map">
            <Map
              offersLocations={nearestOffers.map((offer) => offer.location)}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearestOffers.map((offer, i) => <Card
                key={`${offer.id}-${i}`}
                offer={offer}
                changeActiveOffer={() => {}}
              />)}
            </div>
          </section>
        </div>
      </main>
    </div>;
  }

  _loadDataForOffer() {
    const {
      loadOffersForDetailPage,
      currentOfferDetail
    } = this.props;

    this._currentOffer = currentOfferDetail;

    if (!this._currentOffer) {
      loadOffersForDetailPage(this._currentOfferId);
    }
  }

  _getImagesForRender() {
    const {
      images
    } = this.props.currentOfferDetail;

    return images.length <= 6 ? images : images.slice(0, 6);
  }

  _handleToggleFavoriteButtonClick(evt) {
    const {
      currentOfferDetail: {
        id,
        isFavorite
      },
      toggleFavoriteHotel
    } = this.props;

    evt.preventDefault();

    toggleFavoriteHotel(id, !isFavorite);
  }
}

OfferDetail.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  currentOfferDetail: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      offerId: PropTypes.string.isRequired
    })
  }),
  loadOffersForDetailPage: PropTypes.func.isRequired,
  currentComments: PropTypes.array,
  nearestOffers: PropTypes.arrayOf(offerPropTypes),
  toggleFavoriteHotel: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.offers,
  currentOfferDetail: state.currentOfferDetail,
  currentComments: state.currentComments,
  nearestOffers: Selectors.getNearestOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadOffersForDetailPage: (currentOffer) => dispatch(Operation.loadOffersForDetailPage(currentOffer)),
  toggleFavoriteHotel: (offerId, isSetFavorite) => dispatch(Operation.toggleFavoriteHotel(offerId, isSetFavorite))
});

export {OfferDetail};
export default connect(mapStateToProps, mapDispatchToProps)(OfferDetail);

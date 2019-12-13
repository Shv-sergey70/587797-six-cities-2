import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {MAX_RATING_VALUE} from "../../const/common";
import Operation from '../../operation';
import ReviewItem from "../review-item/review-item";
import offerPropTypes from '../../prop-types/offer';
import Card from "../card/card";
import Selectors from '../../selector';
import Map from "../map/map";
import PageHeader from "../page-header/page-header";
import ReviewForm from "../review-form/review-form";
import {withReviewForm} from "../../hocs/with-review-form/with-review-form";
import {getRatingPercent} from "../../utils";
import commentPropTypes from '../../prop-types/comment';

const ReviewFormWrapped = withReviewForm(ReviewForm);

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

  componentDidUpdate() {
    this._loadDataForOffer();
  }

  _loadDataForOffer() {
    const {
      loadOffersForDetailPage,
      currentOfferDetail,
      match: {
        params: {
          offerId
        }
      }
    } = this.props;

    this._currentOfferId = Number(offerId);
    this._currentOffer = currentOfferDetail;

    if (!this._currentOffer || this._currentOfferId !== currentOfferDetail.id) {
      loadOffersForDetailPage(this._currentOfferId);
    }
  }

  _getImagesForRender() {
    const {
      images
    } = this.props.currentOfferDetail;

    return images.length <= 6 ? images : images.slice(0, 6);
  }

  _handleToggleFavoriteButtonClick() {
    const {
      currentOfferDetail: {
        id,
        isFavorite
      },
      toggleFavoriteHotel
    } = this.props;

    toggleFavoriteHotel(id, !isFavorite);
  }

  render() {
    const {
      currentOfferDetail,
      currentComments,
      nearestOffers,
      isUserAuthorized
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
                  <span style={{width: `${getRatingPercent(rating, MAX_RATING_VALUE)}%`}}> </span>
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{currentComments.length}</span></h2>
                <ul className="reviews__list">
                  {currentComments.map((comment) => <ReviewItem
                    key={`comment-${comment.id}`}
                    comment={comment}
                  />)}
                </ul>
                {isUserAuthorized ? <ReviewFormWrapped offerId={this._currentOfferId}/> : ``}
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
}

OfferDetail.propTypes = {
  currentOfferDetail: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      offerId: PropTypes.string.isRequired
    })
  }),
  loadOffersForDetailPage: PropTypes.func.isRequired,
  currentComments: PropTypes.arrayOf(commentPropTypes),
  nearestOffers: PropTypes.arrayOf(offerPropTypes),
  toggleFavoriteHotel: PropTypes.func.isRequired,
  isUserAuthorized: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isUserAuthorized: Selectors.isUserAuthorized(state),
  currentOfferDetail: state.currentOfferDetail,
  currentComments: Selectors.getSortedCurrentComments(state),
  nearestOffers: Selectors.getNearestOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadOffersForDetailPage: (currentOffer) => dispatch(Operation.loadOffersForDetailPage(currentOffer)),
  toggleFavoriteHotel: (offerId, isSetFavorite) => dispatch(Operation.toggleFavoriteHotel(offerId, isSetFavorite))
});

export {OfferDetail};
export default connect(mapStateToProps, mapDispatchToProps)(OfferDetail);

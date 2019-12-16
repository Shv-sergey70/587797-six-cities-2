import React from 'react';
import PropTypes from 'prop-types';
import Operation from "../../operation";
import {connect} from "react-redux";
import {RatingItem} from '../../const/rating';
import notifier from '../../notifier';

const CommentFieldLength = {
  MAX: 300,
  MIN: 50
};

class ReviewForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this._isFormValid = this._isFormValid.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();

    const {
      offerId,
      review,
      rating,
      addReview,
      resetForm
    } = this.props;

    addReview(offerId, rating, review)
      .then(() => resetForm())
      .catch(() => notifier.error(`Возникла ошибка, попробуйте позже`));
  }

  _isFormValid() {
    const {
      review,
      rating
    } = this.props;

    return review.length > CommentFieldLength.MIN && review.length <= CommentFieldLength.MAX && rating;
  }

  render() {
    const {
      review,
      rating,
      onCommentChange,
      onRatingClick
    } = this.props;

    return <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.keys(RatingItem).map((ratingItemKey) => {
          const ratingItem = RatingItem[ratingItemKey];

          return <React.Fragment key={`${ratingItem.value}-${rating}`}>
            <input className="form__rating-input visually-hidden" name="rating" value={ratingItem.value}
              id={`${ratingItem.value}-stars`} type="radio" onClick={onRatingClick} defaultChecked={Number(rating) === ratingItem.value}/>
            <label htmlFor={`${ratingItem.value}-stars`} className="reviews__rating-label form__rating-label" title={ratingItem.text}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </React.Fragment>;
        })}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved" value={review} onChange={onCommentChange}
        minLength={CommentFieldLength.MIN} maxLength={CommentFieldLength.MAX}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">{CommentFieldLength.MIN} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!this._isFormValid()} onClick={this._handleFormSubmit}>Submit</button>
      </div>
    </form>;
  }
}

ReviewForm.propTypes = {
  offerId: PropTypes.number,
  review: PropTypes.string,
  rating: PropTypes.string,
  onCommentChange: PropTypes.func.isRequired,
  onRatingClick: PropTypes.func.isRequired,
  addReview: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  addReview: (offerId, rating, comment) => dispatch(Operation.addReview(offerId, rating, comment))
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);

import React from 'react';
import {getRatingPercent} from "../../utils";
import {MAX_RATING_VALUE} from "../../const/common";
import moment from 'moment';
import commentPropTypes from "../../prop-types/comment";

const ReviewItem = (props) => {
  const {
    comment: {
      user: {
        name: userName,
        avatarUrl
      },
      rating,
      comment: commentText,
      date
    }
  } = props;

  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
      </div>
      <span className="reviews__user-name">{userName}</span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${getRatingPercent(rating, MAX_RATING_VALUE)}%`}}> </span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">{commentText}</p>
      <time className="reviews__time" dateTime={moment(date).format(`YYYY-MM-DD`)}>{moment(date).format(`MMMM YYYY`)}</time>
    </div>
  </li>;
};

ReviewItem.propTypes = {
  comment: commentPropTypes
};

export default ReviewItem;

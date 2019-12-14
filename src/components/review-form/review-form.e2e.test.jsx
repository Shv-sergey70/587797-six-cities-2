import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ReviewForm} from "./review-form";

Enzyme.configure({adapter: new Adapter()});

jest.mock(`../../notifier`, () => ({
  error: jest.fn()
}));

it(`Review & rating success change`, () => {
  const reviewTextareaChangeHandler = jest.fn();
  const ratingInputClickHandler = jest.fn();

  const reviewFormSection = shallow(
      <ReviewForm
        offerId={1}
        review={`testText`}
        rating={`4`}
        onCommentChange={reviewTextareaChangeHandler}
        onRatingClick={ratingInputClickHandler}
        addReview={jest.fn()}
        resetForm={jest.fn()}
      />);

  reviewFormSection.find(`[name="review"]`).simulate(`change`);
  reviewFormSection.find(`[name="rating"]`).first().simulate(`click`);

  expect(reviewTextareaChangeHandler).toHaveBeenCalledTimes(1);
  expect(ratingInputClickHandler).toHaveBeenCalledTimes(1);
});

describe(`Form submit`, () => {
  it(`Review is too short`, () => {
    const reviewTextareaChangeHandler = jest.fn();
    const addReviewHandler = jest.fn();
    const resetFormHandler = jest.fn();

    const reviewFormSection = shallow(
        <ReviewForm
          offerId={1}
          review={`testTexttestTexttestTexttestText`}
          rating={`4`}
          onCommentChange={reviewTextareaChangeHandler}
          onRatingClick={jest.fn()}
          addReview={addReviewHandler}
          resetForm={resetFormHandler}
        />);

    reviewFormSection.find(`[name="review"]`).simulate(`change`);
    reviewFormSection.find(`.reviews__submit`).simulate(`submit`, {
      preventDefault: jest.fn()
    });

    expect(addReviewHandler).toHaveBeenCalledTimes(0);
    expect(resetFormHandler).toHaveBeenCalledTimes(0);
  });
});

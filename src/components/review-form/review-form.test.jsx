import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewForm} from "./review-form";

jest.mock(`../../notifier`, () => ({
  error: jest.fn(),
}));

it(`Review form correctly renders`, () => {
  const tree = renderer.create(
      <ReviewForm
        offerId={1}
        review={`testText`}
        rating={`4`}
        onCommentChange={jest.fn()}
        onRatingClick={jest.fn()}
        addReview={jest.fn()}
        resetForm={jest.fn()}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

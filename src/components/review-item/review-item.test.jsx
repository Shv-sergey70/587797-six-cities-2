import React from 'react';
import renderer from 'react-test-renderer';
import ReviewItem from "./review-item";

it(`Review item correctly renders`, () => {
  const tree = renderer.create(
      <ReviewItem
        comment={{
          id: 1,
          user: {
            id: 1,
            isPro: true,
            name: `Angelina`,
            avatarUrl: `/img/avatar-angelina.jpg`
          },
          rating: 3,
          comment: `Comment`,
          date: `2019-12-12`
        }}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

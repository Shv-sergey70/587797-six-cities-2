import React from 'react';
import renderer from 'react-test-renderer';
import {OfferDetail} from "./offer-detail";

it(`Offer detail correctly renders`, () => {
  const tree = renderer.create(
      <OfferDetail
        offer = {
          {
            id: 1,
            title: `Beautiful & luxurious apartment at great location`,
            images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
            bedrooms: 2,
            maxAdults: 2,
            goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
            isPremium: true,
            isFavorite: true,
            type: `Apartment`,
            price: 80,
            rating: 4.5,
            host: {
              isPro: true,
              name: `Angelina`,
              avatar: `/img/avatar-angelina.jpg`
            },
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
          }
        }
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

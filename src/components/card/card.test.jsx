import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from "./card";
import {BrowserRouter as Router} from "react-router-dom";

it(`Card correctly renders`, () => {
  const tree = renderer.create(
      <Router>
        <Card
          offer = {
            {
              id: 1,
              title: `Beautiful & luxurious apartment at great location`,
              previewImage: `/img/apartment-01.jpg`,
              isPremium: true,
              isFavorite: true,
              type: `apartment`,
              price: 80,
              rating: 4.4,
              bedrooms: 2,
              maxAdults: 2,
              images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
              goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
              description: `A quiet cozy and picturesque that hides behind a a river`
            }
          }
          toggleFavoriteHotel = {() => {}}
          changeActiveOffer = {() => {}}
        />
      </Router>).toJSON();

  expect(tree).toMatchSnapshot();
});

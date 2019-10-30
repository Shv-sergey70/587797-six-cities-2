export const maxRatingValue = 5;
export const offersData = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    previewImage: `/img/apartment-01.jpg`,
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
  },
  {
    id: 2,
    title: `Wood and stone place`,
    previewImage: `/img/apartment-01.jpg`,
    images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
    bedrooms: 5,
    maxAdults: 4,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    isPremium: true,
    isFavorite: false,
    type: `Private room`,
    price: 180,
    rating: 4,
    host: {
      isPro: false,
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`
    },
    description: `The building is green and from 18th century.`
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    previewImage: `/img/apartment-02.jpg`,
    images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
    bedrooms: 1,
    maxAdults: 2,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    isPremium: false,
    isFavorite: true,
    type: `Apartment`,
    price: 120,
    rating: 5,
    host: {
      isPro: true,
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`
    },
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    previewImage: `/img/apartment-03.jpg`,
    images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-01.jpg`, `/img/studio-01.jpg`],
    bedrooms: 3,
    maxAdults: 2,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    isPremium: false,
    isFavorite: false,
    type: `Private room`,
    price: 40,
    rating: 3,
    host: {
      isPro: false,
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`
    },
    description: `An independent House`
  }
];

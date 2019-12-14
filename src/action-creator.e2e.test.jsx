import ActionCreator from "./action-creator";

describe(`ActionCreator works correctly`, () => {
  it(`changeCity method returns correct answer`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: `CHANGE_CITY`,
      payload: `Amsterdam`
    });
  });

  it(`loadOffers method returns correct answer`, () => {
    const loadOfferAnswer = [
      {name: 1},
      {name: 2}
    ];

    expect(ActionCreator.loadOffers(loadOfferAnswer)).toEqual({
      type: `LOAD_OFFERS`,
      payload: loadOfferAnswer
    });
  });

  it(`authorize method returns correct answer`, () => {
    const authorizeAnswer = {
      name: `Maria`,
      email: `maria@mail.com`
    };

    expect(ActionCreator.authorize(authorizeAnswer)).toEqual({
      type: `AUTHORIZE`,
      payload: authorizeAnswer
    });
  });

  it(`loadFavorites method returns correct answer`, () => {
    const favoritesAnswer = {
      test: `test1`
    };

    expect(ActionCreator.loadFavorites(favoritesAnswer)).toEqual({
      type: `LOAD_FAVORITES`,
      payload: favoritesAnswer
    });
  });

  it(`toggleFavoriteHotel method returns correct answer`, () => {
    expect(ActionCreator.toggleFavoriteHotel(5, true)).toEqual({
      type: `TOGGLE_FAVORITE_HOTEL`,
      payload: {
        hotelId: 5,
        isSetFavorite: true
      }
    });
  });

  it(`changeActiveOffer method returns correct answer`, () => {
    expect(ActionCreator.changeActiveOffer(5)).toEqual({
      type: `CHANGE_ACTIVE_OFFER`,
      payload: 5
    });
  });

  it(`setCurrentOfferIdDetail method returns correct answer`, () => {
    expect(ActionCreator.setCurrentOfferIdDetail(3)).toEqual({
      type: `SET_CURRENT_OFFER_DETAIL`,
      payload: 3
    });
  });

  it(`loadCommentsForOffer method returns correct answer`, () => {
    const comments = [
      {comment: `comment1`},
      {comment: `comment2`}
    ];

    expect(ActionCreator.loadCommentsForOffer(comments)).toEqual({
      type: `LOAD_COMMENTS_FOR_OFFER`,
      payload: comments
    });
  });

  it(`changeSortingType method returns correct answer`, () => {
    expect(ActionCreator.changeSortingType(`POPULAR`)).toEqual({
      type: `CHANGE_SORTING_TYPE`,
      payload: `POPULAR`
    });
  });
});

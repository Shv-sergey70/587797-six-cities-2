import ActionCreator from "./action-creator";

const loadOfferAnswer = [
  {
    name: 1
  },
  {
    name: 2
  }
];

const authorizeAnswer = {
  name: `Maria`,
  email: `maria@mail.com`
};

describe(`ActionCreator works correctly`, () => {
  it(`changeCity method returns correct answer`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: `CHANGE_CITY`,
      payload: `Amsterdam`
    });
  });

  it(`loadOffers method returns correct answer`, () => {
    expect(ActionCreator.loadOffers(loadOfferAnswer)).toEqual({
      type: `LOAD_OFFERS`,
      payload: loadOfferAnswer
    });
  });

  it(`authorize method returns correct answer`, () => {
    expect(ActionCreator.authorize(authorizeAnswer)).toEqual({
      type: `AUTHORIZE`,
      payload: authorizeAnswer
    });
  });
});

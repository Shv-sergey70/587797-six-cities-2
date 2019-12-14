import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureAPI from "./api";
import MockAdapter from 'axios-mock-adapter';
import Operation from './operation';

Enzyme.configure({adapter: new Adapter()});

describe(`Operations tests`, () => {
  it(`Operation with loadOffers method correctly works`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{
        data: {}
      }]);

    return offersLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_OFFERS`,
          payload: [{
            data: {}
          }]
        });
      });
  });

  it(`Operation with authorize method correctly works`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const operationFunc = Operation.authorize(`test@email.com`, 125125);

    apiMock
      .onPost(`/login`)
      .reply(200, [{
        data: {}
      }]);

    return operationFunc(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `AUTHORIZE`,
          payload: [{
            data: {}
          }]
        });
      });
  });

  it(`Operation with checkAuth method correctly works`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const operationFunc = Operation.checkAuth(`test@email.com`, 125125);

    apiMock
      .onGet(`/login`)
      .reply(200, [{
        data: {}
      }]);

    return operationFunc(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `AUTHORIZE`,
          payload: [{
            data: {}
          }]
        });
      });
  });

  it(`Operation with loadFavorites method correctly works`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const operationFunc = Operation.loadFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{
        data: [
          {offerId: 1},
          {offerId: 2}
        ]
      }]);

    return operationFunc(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_FAVORITES`,
          payload: [{
            data: [
              {offerId: 1},
              {offerId: 2}
            ]
          }]
        });
      });
  });

  it(`Operation with toggleFavoriteHotel method correctly works`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const operationFunc = Operation.toggleFavoriteHotel(2, true);

    apiMock
      .onPost(`/favorite/2/1`)
      .reply(200, [{
        data: [
          {offerId: 2}
        ]
      }]);

    return operationFunc(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `TOGGLE_FAVORITE_HOTEL`,
          payload: {
            hotelId: 2,
            isSetFavorite: true
          }
        });
      });
  });

  it(`Operation with loadOffersForDetailPage method correctly works`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const operationFunc = Operation.loadOffersForDetailPage(3);

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{
        offerId: 2
      }]);

    apiMock
      .onGet(`/comments/3`)
      .reply(200, [{
        commentId: 3
      }]);

    return operationFunc(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_OFFERS`,
          payload: [
            {offerId: 2}
          ]
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: `SET_CURRENT_OFFER_DETAIL`,
          payload: 3
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: `CHANGE_ACTIVE_OFFER`,
          payload: 3
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: `LOAD_COMMENTS_FOR_OFFER`,
          payload: [
            {commentId: 3}
          ]
        });
      });
  });

  it(`Operation with addReview method correctly works`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const operationFunc = Operation.addReview(4, 3, `testText`);

    apiMock
      .onPost(`/comments/4`)
      .reply(200, {
        commentId: 2
      });

    return operationFunc(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_COMMENTS_FOR_OFFER`,
          payload: {
            commentId: 2
          }
        });
      });
  });
});

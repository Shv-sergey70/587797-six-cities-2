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
    const authorizeFunc = Operation.authorize(`test@email.com`, 125125);

    apiMock
      .onPost(`/login`)
      .reply(200, [{
        data: {}
      }]);

    return authorizeFunc(dispatch, jest.fn(), api)
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
});

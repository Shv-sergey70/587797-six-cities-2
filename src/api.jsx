import axios from 'axios';
import {ApiUrl, Route} from "./const/routes";
import history from "./history";
import {isPrivateRoute} from "./utils";
import {HttpAnswerCode} from "./const/http-answer-codes";

const configureAPI = () => {
  const api = axios.create({
    baseURL: ApiUrl,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if ((err.status === HttpAnswerCode.UNAUTHORIZED || (err.response && err.response.status === HttpAnswerCode.UNAUTHORIZED)) && isPrivateRoute(err.config.method, err.config.url)) {
      history.push(Route.LOGIN);
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default configureAPI;

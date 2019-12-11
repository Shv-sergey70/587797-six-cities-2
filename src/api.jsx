import axios from 'axios';
import {ApiUrl, Route} from "./const/routes";
import history from "./history";
import {isPrivateRoute} from "./utils";

const configureAPI = () => {
  const api = axios.create({
    baseURL: ApiUrl,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if ((err.status === 401 || (err.response && err.response.status === 401)) && isPrivateRoute(err.config.method, err.config.url)) {
      console.log(401);
      return history.push(Route.LOGIN);
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default configureAPI;

import axios from 'axios';

const configureAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => {
    // console.log(response);

    return response;
  };
  const onFail = (error) => {
    // console.log(error); // Потестить работу
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default configureAPI;

import axios from 'axios';
import APP_CONFIG from '@core/constants/app-config';

const request = axios.create({
  baseURL: APP_CONFIG.apiBaseUrl,
});

axios.interceptors.request.use(
  (request) => {
    // Edit request config
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // Edit response config
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;

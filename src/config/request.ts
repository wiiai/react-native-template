import axios, {AxiosRequestConfig} from 'axios';
import { err } from 'react-native-svg/lib/typescript/xml';
import {baseURL} from './index';

const instance = axios.create();

instance.interceptors.request.use(
  function (config) {
    console.log(config)
    return config;
  },
  function (error) {
    console.log('--error', error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log(error)
    return Promise.reject(error);
  },
);

function sleep() {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(null), 200);
  });
}

async function request<T>(options: AxiosRequestConfig): Promise<T> {
  const p1 = instance({
    ...options,
    url: baseURL + options.url,
    method: options.method || 'POST'
  });
  console.log(111, baseURL + options.url)
  const p2 = sleep();
  return Promise.all([p1, p2]).then(res => {
    return res[0] as unknown as T;
  });
}

export {request};

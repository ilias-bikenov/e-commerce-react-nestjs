import axios from 'axios';

const $host = axios.create({
  baseURL: process.env.REACT_APP_URL
})

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_URL

})

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)

$host.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log(config)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export {
  $host,
  $authHost
}
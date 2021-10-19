import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

api.interceptors.request.use((req) => {
  if (JSON.parse(localStorage.getItem('user'))) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('user')).token
    }`;
  }

  return req;
});

export const getProducts = (query) => api.get(`products?${query}`);
export const getProductById = (id) => api.get(`products/${id}`);

export const signin = (authValue) => api.post('user/signin', authValue);

export const signup = (authValue) => api.post('user/signup', authValue);

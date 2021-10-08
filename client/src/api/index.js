import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

export const getProducts = (query) =>
  api.get(`products?${query}`).catch((err) => console.log(err));
export const getApiInfo = () =>
  api.get('products/info').catch((err) => console.log(err));
export const getProduct = (id) =>
  api.get(`products/${id}`).catch((err) => console.log(err));

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
});

api.interceptors.request.use(req => {
  if (JSON.parse(localStorage.getItem("user"))) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }

  return req;
});

export const getProducts = query => api.get(`products?${query}`);
export const getProductById = id => api.get(`products/${id}`);

export const getCart = () => api.get("cart");

export const addToCart = cartItem => api.post("cart", cartItem);

export const updateQuantity = cartItem =>
  api.put(`cart/${cartItem._id}`, cartItem);

export const deleteCartItem = id => api.delete(`cart/${id}`);

export const clearCart = () => api.delete("cart");

export const signin = authValue => api.post("user/signin", authValue);

export const signup = authValue => api.post("user/signup", authValue);

import {  configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import productsReducer from "./slices/products-slice";
import productReducer from "./slices/product-slice";
import logger from 'redux-logger';


const store = configureStore(
  {
    reducer: {
      products: productsReducer,
      auth: authReducer,
      product: productReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  },
  

);
export default store;

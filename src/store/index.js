import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import productsReducer from "./slices/products-slice";
import productReducer from "./slices/product-slice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    product: productReducer,
  },
});
export default store;

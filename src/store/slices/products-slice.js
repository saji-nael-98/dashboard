import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT_CATEGORY } from "../../Constents/ProductConstent";
import { getProducts } from "../action/products-action";

const initialState = {
  products: [],
  filteredProducts: [],
  status: "idle",
  error: "",
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    findProductsByCategory(state, action) {
      state.filteredProducts = state.products.filter((product) => {
        const index = PRODUCT_CATEGORY.indexOf(product.category);
        return index === action.payload;
      });
    },
    findProductsByName(state, action) {
      const data = state.products.filter((product) =>
        product.name.includes(action.payload)
      );
      state.filteredProducts = data;
    },
    clearFilters(state) {
      state.filteredProducts = state.products;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.status = "successed";
      state.products = action.payload;
      state.filteredProducts = action.payload;
    });
  },
});
export const productsActions = productsSlice.actions;
export default productsSlice.reducer;

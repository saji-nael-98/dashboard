import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};
const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    create(state, action) {
      state.products.push(action.payload);
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});
export const productAction = productSlice.actions;
export default productSlice.reducer;

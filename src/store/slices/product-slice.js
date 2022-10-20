import { createSlice } from "@reduxjs/toolkit";
import { editProduct, getProduct } from "../action/product-action";

const initialState = {
  product: null,
  status: null,
  error: null,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.status = "success";
        state.error = null;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.product = null;
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.status = "updated";
        state.error = null;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      });
  },
});
export const productActions = productSlice.actions;
export default productSlice.reducer;

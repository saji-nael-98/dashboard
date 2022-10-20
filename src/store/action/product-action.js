import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  APiHeaderWithtoken,
  DELETE_PRODUCT_URL,
  PRODUCT_URL,
  READ_PRODUCT_URL,
} from "../../Constents/APIConstents";
import { productsActions } from "../slices/products-slice";

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.get(READ_PRODUCT_URL(id), {
        headers: APiHeaderWithtoken(token),
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const editProduct = createAsyncThunk(
  "product/editProduct",
  async (data, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.put(
        READ_PRODUCT_URL(data.id),
        data.product,
        {
          headers: APiHeaderWithtoken(token),
        }
      );
      return response?.data;
    } catch (error) {
      alert(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async (product, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.post(PRODUCT_URL, product, {
        headers: APiHeaderWithtoken(token),
      });
      return response?.data;
    } catch (error) {
      alert(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { getState, rejectWithValue,dispatch }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.delete(DELETE_PRODUCT_URL(id), {
        headers: APiHeaderWithtoken(token),
      });
      dispatch(productsActions.deleteProduct(response?.data.id))
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
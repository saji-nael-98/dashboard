import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  APiHeaderWithtoken,
  READ_PRODUCT_URL,
} from "../../Constents/APIConstents";

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
      const response = await axios.put(READ_PRODUCT_URL(data.id), data.product, {
        headers: APiHeaderWithtoken(token),
      });
      return response?.data;
    } catch (error) {
      alert(error.response.data.message)
      return rejectWithValue(error.response.data.message);
    }
  }
);

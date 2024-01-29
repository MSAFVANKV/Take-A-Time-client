import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { uploadDetails } from "../Constant/ServerApi";

export const uploadProduct = createAsyncThunk(
  "details/upload-details",
  async (formData) => {
//   console.log("Submitted formData", formData);
    
    try {
      const res = await axios.post(uploadDetails, {
        formData,
      });
//   console.log("Submitted redux", res.data);
      return res.data;

    } catch (error) {
      throw Error(error.response?.data?.msg || "Upload failed");
    }
  }
);

const AccountDetailsSlice = createSlice({
  name: 'details',
  initialState: {
    loading: false,
    error: "",
    data: [],
  },
  reducers: {
    setDetails: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.status = 'fulfilled'
      })
      .addCase(uploadProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },

});


export const {}  = AccountDetailsSlice.actions;
export default AccountDetailsSlice.reducer
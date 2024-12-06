import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  portfolio: [],
  isLoading: false,
  isError: false,
  error: "",
  isSuccess: false,
};

const API_URL = "https://fe-react-agency-api-dash.vercel.app/";

export const getPortfolio = createAsyncThunk(
  "portfolio/get",
  async (page, { getState, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}portfolio?page=${page}&limit=20`,
        {
          headers: {
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const createPortfolio = createAsyncThunk(
  "portfolio/create",
  async (data, { getState, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}portfolio`,data ,
        {
          headers: {
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET PORTFOLIO
    builder
      .addCase(getPortfolio.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getPortfolio.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.portfolio = action.payload;
      })
      .addCase(getPortfolio.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
    // CREATE PORTFOLIO
    builder
      .addCase(createPortfolio.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createPortfolio.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(createPortfolio.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
      
  },
});

export default portfolioSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
  isSuccess: false,
};

const API_URL = "https://fe-react-agency-api-dash.vercel.app/";

export const getBlog = createAsyncThunk(
  "blog/get",
  async (page, { getState, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}blogs?page=${page}&limit=20`,
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
export const createBlog = createAsyncThunk(
  "blog/create",
  async (data, { getState, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}blogs`,data ,
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

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET BLOG
    builder
      .addCase(getBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blogs = action.payload;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
    // CREATE BLOG
    builder
      .addCase(createBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createBlog.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default blogSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: null,
  message: null,
  isSuccess: false,
};

const API_URL = "https://fe-react-agency-api-dash.vercel.app/";

export const createUser = createAsyncThunk(
  "user/create",
  async (data, { getState, rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}users`, data, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/delete",
  async (id, { getState, rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete(`${API_URL}users/${id}`, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
        state.message = null;
        state.isSuccess = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.message = "User created successfully";
        state.user = action.payload;
        state.isSuccess = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload || "Failed to create user";
      });
    
    builder
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = null;
        state.isSuccess = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.message = action.payload.message || "User deleted Successfully"
        state.isSuccess = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message || "Failed delete user"
        state.isSuccess = true;
      })
  },
});

export default userSlice.reducer;

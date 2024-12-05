import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  isSuccess: false,
  error: null,
  isAuthenticated: false,
};

const API_URL = "https://fe-react-agency-api-dash.vercel.app/";

// LOGIN USER
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password, remember_me }, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}auth/login`,
        { email, password, remember_me }
      );
      const { token } = response.data;
      dispatch(authSlice.actions.setToken(token));
      dispatch(getUser());

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// GET USER DETAIL
export const getUser = createAsyncThunk(
  "auth/getUser",
  async (_, { getState, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}auth/profile`, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        }
      })
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)
// LOGOUT USER
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { getState, rejectWithValue }) => {
    try {
      console.log(getState().auth.token);
      const response = await axios.post(
        `${API_URL}auth/logout`, {}, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    // LOGIN USER
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isAuthenticated = false;
        state.isSuccess = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.isSuccess = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.isSuccess = false;
      });

    // GET USER DETAIL
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isSuccess = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isSuccess = false;
      });

    // LOGOUT USER
    builder
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.isSuccess = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
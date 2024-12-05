// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const userSliceAPI = createApi({
//   reducerPath: "blogApiSlice",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://fe-react-agency-api-dash.vercel.app/",
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token;
//       if (token) {
//         headers.set("authorization", `Bearer ${token}`);
//       }
//       return headers;
//     }
//   }),
//   endpoints: (builder) => ({
//     getAllUser: builder.query({
//       query: (page) => `users?page=${page}&limit=20`,
//     }),
//   }),
// });
// export const { useGetAllUserQuery } = userSliceAPI;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  user: {},
  isLoading: false,
  isError: null,
  message: null,
  isSuccess: false,
};

const API_URL = "https://fe-react-agency-api-dash.vercel.app/";

export const getUsers = createAsyncThunk(
  "user/get",
  async (page, { getState, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}users?page=${page}&limit=20`,
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

export const searchUser = createAsyncThunk(
  "user/search",
  async (search, { getState, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}users?search=${search}&page=1&limit=50`,
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
  async (id, { getState, rejectWithValue }) => {
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

export const updateUser = createAsyncThunk(
  "user/update",
  async (data, { getState, rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}users/${data.id}`, data, {
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
    // GET ALL USERS
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
        state.message = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.message = "User fetched successfully";
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch users";
      });

    // SEARCH USER
    builder
      .addCase(searchUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
        state.message = null;
      })
      .addCase(searchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.message = "User found";
        state.user = action.payload;
      })
      .addCase(searchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch users";
      });

    // CREATE USER
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
        state.message = null;
        state.isSuccess = false;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = null;
        state.message = "User created successfully";
        state.isSuccess = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload || "Failed to create user";
      });

    // DELETE USER
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
        state.message = action.payload.message || "User deleted Successfully";
        state.isSuccess = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message || "Failed delete user";
        state.isSuccess = false;
      });

    // SEARCH USER
    

    // UPDATE USER
    builder
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = null;
        state.isSuccess = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.message = action.payload.message || "User updated Successfully";
        state.isSuccess = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message || "Failed update user";
        state.isSuccess = false;
      });
  },
});

export default userSlice.reducer;

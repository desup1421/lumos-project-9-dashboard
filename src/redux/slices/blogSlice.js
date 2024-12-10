import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogs: [],
  blog: {},
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
export const updateBlog = createAsyncThunk(
  "blog/update",
  async (data, { getState, rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}blogs/${data.get('id')}`,
        data,
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

export const deleteBlog = createAsyncThunk(
  "blog/delete",
  async (id, { getState, rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${API_URL}blogs/${id}`,
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

export const getDetailBlog = createAsyncThunk(
  "blog/detail",
  async (id, { getState, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}blogs/${id}`,
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
)

export const updatePublish = createAsyncThunk(
  "blog/publish",
  async (id, { getState, rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${API_URL}blogs/${id}/publish`, {},
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
)


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
        state.blog = {};
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blogs = action.payload;
        state.isSuccess = false;
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
        state.isSuccess = true;
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
    // UPDATE BLOG
    builder
      .addCase(updateBlog.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(updateBlog.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });

    // DELETE BLOG
    builder
      .addCase(deleteBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(deleteBlog.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });

    // DETAIL BLOG
    builder
      .addCase(getDetailBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getDetailBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blog = action.payload;
        state.isSuccess = false;
      })
      .addCase(getDetailBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
    // UPDATE PUBLISH BLOG
    builder
    .addCase(updatePublish.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(updatePublish.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(updatePublish.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      }); 
    
  },
});

export default blogSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {publicRequest,userRequest} from "../../requestMethods";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await userRequest.post("/auth/register", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await userRequest.post("/auth/login", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// get all users
export const getAllUsers = createAsyncThunk("getAllUsers", async ({ rejectWithValue }) => {
  const response = await userRequest.get("/users");
  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    isLoading: false,
    isSuccess: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // Register User
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        console.log(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        console.log(action.payload);
      })

      //Login User
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        console.log(action.payload);
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        console.log(action.payload);
      })
      
      // get all users
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = [...state.user, ...action.payload];
        console.log(action.payload);
      })

      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        console.log(action.payload);
      });

  },
});

export default authSlice.reducer;
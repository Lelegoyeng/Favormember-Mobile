import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import callAxios from "../../utils/axios";

export type UserData = {
  public_id: string;
  email: string;
  posisi: string;
  access_token: string;
  refresh_token?: string;
};

export type AuthState = {
  is_loggedin: boolean;
  data: UserData | null;
};

const initialState: AuthState = {
  is_loggedin: false,
  data: null,
};

export const PostLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }: any, { dispatch }) => {
    try {
      const {
        access_token,
        refresh_token,
        email: _email,
        posisi,
        public_id,
      } = (
        await callAxios.post("/login", {
          email,
          password,
        })
      ).data.result;

      const userData: UserData = {
        access_token,
        refresh_token,
        email: _email,
        posisi,
        public_id,
      };
      return userData;
    } catch (err: any) {
      // Cannot login!
      const toastData = {
        type: "error",
        message: err.response.data.message || "Error",
      };
      // dispatch(SetToastData(toastData));

      throw err;
    }
  }
);

export const RefreshLogin = createAsyncThunk(
  "auth/refresh-login",
  async (_) => {
    try {
      const { access_token, refresh_token, email, posisi, public_id } = (
        await callAxios.get("/auth/refresh-login")
      ).data.result;

      const userData: UserData = {
        access_token,
        refresh_token,
        email,
        posisi,
        public_id,
      };
      return userData;
    } catch (err: any) {
      throw err;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    Logout(state: AuthState) {
      state.is_loggedin = false;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PostLogin.fulfilled, (state: AuthState, { payload }) => {
      state.is_loggedin = true;
      state.data = payload;
    });
    builder.addCase(PostLogin.rejected, (state: AuthState, { payload }) => {
      state.is_loggedin = false;
      state.data = null;
    });
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { Logout } = authSlice.actions;
export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: null,
  },
  reducers: {
    setAuthData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setAuthData } = authSlice.actions;
export default authSlice.reducer;

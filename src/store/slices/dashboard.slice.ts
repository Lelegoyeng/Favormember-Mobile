import callAxios from "../../utils/axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

type DashboardState = {
  loading: boolean;
  suspend: boolean;
  member: any;
};

const initialState = {
  loading: false,
  suspend: false,
  member: null,
};

export const GetDashboard = createAsyncThunk(
  "dashboard/dashboard",
  async () => {
    try {
      const result = (await callAxios.get("/dashboard")).data.result;
      // console.log(result);
      return result;
    } catch (error) {}
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(GetDashboard.pending, (state) => {
      state.loading = true;
    });
    addCase(GetDashboard.fulfilled, (state: DashboardState, { payload }) => {
      state.loading = false;
      state.member = payload.members;
      state.suspend = payload.suspend === null ? false : payload.suspend;
    });
    addCase(GetDashboard.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const selectDashboard = (state: RootState) => state.dashboard;
export default dashboardSlice.reducer;

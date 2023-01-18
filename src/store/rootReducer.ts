import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import dashboardReducer from "./slices/dashboard.slice";

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;

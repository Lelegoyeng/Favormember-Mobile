import axios from "axios";
import { store } from "../store";
// import { Logout, LogoutLocal, RefreshLogin } from '../../slices/AuthSlice';
// import { SetProgress, SetToastData } from '../../slices/ConfigSlice';

const axiosApiInstance = axios.create({
  baseURL: "https://devapi.thefavored-one.com/member",
  timeout: 30000,
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    // store.dispatch(SetProgress(true));
    const { data } = store.getState().auth;
    const token =
      config.url === "/auth/refresh-login"
        ? data?.refresh_token
        : data?.access_token;

    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Accept"] = "application/json";

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    // store.dispatch(SetProgress(false));
    return response;
  },
  async function (error) {
    // store.dispatch(SetProgress(false));
    if (error.response.status === 401) {
      const originalRequest = error.config;
      const { data } = store.getState().auth;
      if (
        !originalRequest._retry &&
        data?.refresh_token &&
        !["/auth/refresh-login", "/auth/logout"].includes(error.config.url)
      ) {
        originalRequest._retry = true;
        // const { payload }: any = await store.dispatch(RefreshLogin());
        // console.log("xp", payload.accessToken);

        // axios.defaults.headers.common["Authorization"] =
        //   "Bearer " + payload.accessToken;
        // return axiosApiInstance(originalRequest);
      }
      //   store.dispatch(LogoutLocal());
    }

    const message = error.response.data.message;
    // console.log(message);
    // store.dispatch(
    //   SetToastData({
    //     type: "error",
    //     message: typeof message === "string" ? message : message.join(", "),
    //   })
    // );
    return Promise.reject(error);
  }
);

export default axiosApiInstance;

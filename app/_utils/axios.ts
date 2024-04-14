import axios from "axios";
import { GetAccessToken } from "@/app/_lib/UserToken";

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_HOSTNAME}/api`;
axios.interceptors.request.use(
  (config) => {
    const userToken = GetAccessToken();

    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axios;

import axios from "axios";

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_HOSTNAME}/api`;
axios.interceptors.request.use(
  (config) => {
    const userToken = localStorage.getItem("userToken");

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

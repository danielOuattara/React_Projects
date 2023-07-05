import axios from "axios";
import { getUserFromLocalStorage } from "./index";

const fetchingInstance = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

fetchingInstance.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();
    if (user) {
      config.headers["Authorization"] = `Bearer ${user.token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  },
);

export default fetchingInstance;

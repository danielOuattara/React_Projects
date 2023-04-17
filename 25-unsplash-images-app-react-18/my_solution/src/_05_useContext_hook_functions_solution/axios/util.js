import axios from "axios";

const customFetch = axios.create({
  baseURL: `https://api.unsplash.com/`,
});

export default customFetch;

import axios from "axios";

const fetchingInstance = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

export default fetchingInstance;

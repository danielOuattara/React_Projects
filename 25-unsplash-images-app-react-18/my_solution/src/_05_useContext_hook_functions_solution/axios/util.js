import axios from "axios";

const customFetch = axios.create({
  baseURL:
    "https://api.unsplash.com/search/photos?client_id=qAWgusw9DzKTBowWamDXY1hPIxZs7fUQFcmy1gtmizQ&page=1&query=office",
});

export default customFetch;

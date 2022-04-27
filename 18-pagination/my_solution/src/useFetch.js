import { useState, useEffect, useCallback } from "react";
import paginate from "./utils";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = (personPerPage) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(paginate(data, personPerPage));
    setLoading(false);
  }, [personPerPage]);

  useEffect(() => {
    getProducts();
  }, [personPerPage, getProducts]);

  return { loading, data };
};

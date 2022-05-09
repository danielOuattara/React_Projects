import { useState, useEffect } from "react";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function useFetch() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    try {
      setLoading(true);
      let url = "";
      let nextPages = `&page=${page}`;
      let userQuery = `&query=${query}`;

      if (query) {
        url = `${searchUrl}${clientID}${nextPages}${userQuery}`;
      } else {
        url = `${mainUrl}${clientID}${nextPages}`;
      }
      console.log(" request url = ", url);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status} `);
      }
      const data = await response.json();
      console.log(data);
      setPhotos((previousPhotos) => {
        if (query && page === 1) {
          return [...data.results];
        } else if (query) {
          return [...previousPhotos, ...data.results];
        } else {
          return [...previousPhotos, ...data];
        }
      });
    } catch (error) {
      setError(error);
      console.log(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      const margin = 0;
      if (
        !loading &&
        window.innerHeight + window.scrollY + margin >=
          window.document.body.scrollHeight
      ) {
        setLoading(true);
        setPage((previousPage) => previousPage + 1);
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  const submitQueryRequest = () => {
    setPage(1);
    if (!query) return;
    if (page === 1) {
      fetchImages();
    }
  };

  return { loading, photos, error, page, query, setQuery, submitQueryRequest };
}

export default useFetch;

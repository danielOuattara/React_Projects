import { useState, useEffect, useCallback } from "react";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

export default function useFetchPhotos() {
  //----------------------------
  const [photoState, setPhotoState] = useState({
    loading: true,
    photos: [],
    page: 1,
    query: "",
    error: null,
  });

  //----------------------------
  const fetchPhotos = useCallback(async () => {
    try {
      let url = "";
      let nextPages = `&page=${photoState.page}`;
      let userQuery = `&query=${photoState.query}`;

      if (photoState.query) {
        url = `${searchUrl}${clientID}${nextPages}${userQuery}`;
      } else {
        url = `${mainUrl}${clientID}${nextPages}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status} `);
      }

      const data = await response.json();

      setPhotoState((prevState) => {
        if (photoState.query) {
          return {
            ...prevState,
            photos: [...prevState?.photos, ...data.results],
          };
        } else {
          return {
            ...prevState,
            photos: [...prevState.photos, ...data],
          };
        }
      });
    } catch (err) {
      setPhotoState((prevState) => ({ ...prevState, error: err.message }));
      console.log(err.message);
    } finally {
      setPhotoState((prevState) => ({ ...prevState, loading: false }));
    }
  }, [photoState.query, photoState.page]);

  //----------------------------
  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  //----------------------------
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      const margin = 100;
      if (
        !photoState.loading &&
        window.innerHeight + window.scrollY + margin >=
          window.document.body.scrollHeight
      ) {
        setPhotoState((prevState) => ({
          ...prevState,
          page: prevState.page + 1,
        }));
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, [photoState.page, photoState.loading]);

  //----------------------------
  const submitQueryRequest = () => {
    setPhotoState((prevState) => ({ ...prevState, page: 1 }));
    if (!photoState.query) return;
    if (photoState.page === 1) {
      fetchPhotos();
    }
  };

  return { ...photoState, setPhotoState, submitQueryRequest };
}

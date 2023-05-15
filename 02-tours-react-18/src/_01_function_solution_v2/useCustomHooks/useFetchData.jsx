import { useState, useEffect, useCallback } from "react";

const url = "https://course-api.com/react-tours-project";

export default function useFetchData() {
  const [toursState, setToursState] = useState({
    loading: true,
    isError: false,
    errorMessage: "",
    tours: [],
  });

  const fetchTours = useCallback(async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setToursState((prevState) => ({
          ...prevState,
          isError: true,
          loading: false,
          errorMessage: `${res.status} ${res.statusText}`,
        }));
        throw Error(`${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setToursState((prevState) => ({
        ...prevState,
        loading: false,
        errorMessage: ``,
        tours: data,
      }));
    } catch (err) {
      setToursState((prevState) => ({
        ...prevState,
        loading: false,
        isError: true,
      }));

      return err;
    }
  }, []);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  return { toursState, setToursState, fetchTours };
}

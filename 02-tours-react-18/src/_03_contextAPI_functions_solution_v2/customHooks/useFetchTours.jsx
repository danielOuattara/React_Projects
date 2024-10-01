import { useEffect, useState, useCallback } from "react";

const url = "https://www.course-api.com/react-tours-project";

function useFetchTours() {
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
        isError: true,
        loading: false,
      }));
      return err;
    }
  }, []);

  const removeTourItem = (id) => {
    setToursState((prevState) => ({
      ...prevState,
      tours: prevState.tours.filter((item) => item.id !== id),
    }));
  };

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  return {
    ...toursState,
    removeTourItem,
    fetchTours,
  };
}

export default useFetchTours;

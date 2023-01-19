import {useEffect, useState} from "react";

function useFetchTours(url) {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    // async function fetchTours() {s
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setIsError(true);
        setLoading(false);
        setErrorMessage(`${res.status} ${res.statusText}`);
        throw Error(`${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setTours(data);
      setLoading(false);
      setErrorMessage("");
    } catch (err) {
      setLoading(false);
      setIsError(true);
      return err;
    }
  };

  const removeTourItem = (id) => {
    setTours((tours) => {
      return tours.filter((item) => item.id !== id);
    });
  };

  return {
    loading, isError, errorMessage, tours, fetchTours, removeTourItem
  }
}

export default useFetchTours;






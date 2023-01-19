import { useState, useEffect } from "react";
import Error from "./Error";
import LoadingFunction from "./LoadingFunction";
import ResetTours from "./ResetTours";
import Tours from "./ToursFunction";

const url = "https://course-api.com/react-tours-project";

function AppFunction() {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
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

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTourItem = (id) =>
    setTours((tours) => {
      return tours.filter((item) => item.id !== id);
    });

  if (isError) {
    return <Error errorMessage={errorMessage} />;
  }

  if (loading) {
    return <LoadingFunction />;
  }

  if (tours.length === 0) {
    return <ResetTours fetchTours={fetchTours} />;
  }

  return <Tours tours={tours} removeTourItem={removeTourItem} />;
}

export default AppFunction;

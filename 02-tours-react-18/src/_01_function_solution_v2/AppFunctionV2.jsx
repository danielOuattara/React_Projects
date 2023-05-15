import Error from "./Error";
import LoadingFunction from "./LoadingFunction";
import ResetTours from "./ResetTours";
import Tours from "./ToursFunction";
import useFetchData from "./useCustomHooks/useFetchData";

function AppFunction() {
  const { toursState, setToursState, fetchTours } = useFetchData();

  const removeTourItem = (id) =>
    setToursState((prevState) => ({
      ...prevState,
      tours: prevState.tours.filter((item) => item.id !== id),
    }));

  if (toursState.isError) {
    return <Error errorMessage={toursState.errorMessage} />;
  }

  if (toursState.loading) {
    return <LoadingFunction />;
  }

  if (toursState.tours.length === 0) {
    return <ResetTours fetchTours={fetchTours} />;
  }

  return <Tours tours={toursState.tours} removeTourItem={removeTourItem} />;
}

export default AppFunction;

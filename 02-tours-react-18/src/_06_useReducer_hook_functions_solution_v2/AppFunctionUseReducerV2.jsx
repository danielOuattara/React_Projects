import Error from "./components/Error";
import LoadingFunction from "./components/LoadingFunction";
import ResetTours from "./components/ResetTours";
import Tours from "./components/ToursFunction";
import useFetchTours from "./customHooks/useFetchTours";

export default function AppFunctionUseReducerV2() {
  // console.log("toursState = ", toursState);
  const { isError, loading, tours, errorMessage, fetchTours, removeTourItem } =
    useFetchTours();

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

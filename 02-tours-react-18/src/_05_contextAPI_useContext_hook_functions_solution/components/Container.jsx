import Error from "./Error";
import Loading from "./Loading";
import ResetTours from "./ResetTours";
import Tours from "./Tours";
import { useToursContext } from "../context/ToursContext";

function Container() {
  const { isError, loading, tours } = useToursContext();

  if (isError) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return <ResetTours />;
  }

  return <Tours />;
}

export default Container;

import Error from "./Error";
import Loading from "./LoadingFunction";
import ResetTours from "./ResetTours";
import Tours from "./ToursFunction";
import { ToursContext } from "../context/ToursContext";

function Container() {
  return (
    <ToursContext.Consumer>
      {(context) => {
        const { isError, loading, tours } = context;

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
      }}
    </ToursContext.Consumer>
  );
}

export default Container;

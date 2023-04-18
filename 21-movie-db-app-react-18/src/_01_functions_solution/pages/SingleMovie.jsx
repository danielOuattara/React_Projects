import { useParams, Link } from "react-router-dom";
import { useFetchSingleMovie } from "../customHooks";
import SingleMovieDetails from "../components/SingleMovieDetails";

export default function SingleMovie() {
  const { movieId } = useParams();

  const { isLoading, error, movie } = useFetchSingleMovie(movieId);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="error">
        <h1>{error.message}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }

  return <SingleMovieDetails movie={movie} />;
}

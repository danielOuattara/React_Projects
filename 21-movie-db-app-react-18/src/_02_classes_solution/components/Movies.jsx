import { Link } from "react-router-dom";
import { useFetchMovies } from "../customHooks";

export default function Movies() {
  const { isLoading, moviesList, page, defaultImage } = useFetchMovies();

  if (isLoading && page === 1) {
    return <div className="loading"></div>;
  }

  return (
    <section className="movies">
      {moviesList?.map((movie) => (
        <Link
          key={movie.imdbID}
          to={`/movies/${movie.imdbID}`}
          className="movie"
        >
          <article>
            <img
              src={movie.Poster === "N/A" ? defaultImage : movie.Poster}
              alt={movie.Title}
            />

            <div className="movie-info">
              <h4 className="title">{movie.Title}</h4>
              <p>{movie.Year}</p>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
}

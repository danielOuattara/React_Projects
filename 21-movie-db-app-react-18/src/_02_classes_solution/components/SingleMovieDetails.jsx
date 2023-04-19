import { useFetchMovies } from "../customHooks";

export default function SingleMovieDetails(props) {
  const { defaultImage } = useFetchMovies();
  return (
    <section className="single-movie">
      <img
        src={props.movie.Poster === "N/A" ? defaultImage : props.movie.Poster}
        alt={props.movie.Title}
      />
      <div className="single-props.movie-info">
        <h2>{props.movie.Title}</h2>
        <p>
          <b>Summary :</b> {props.movie.Plot}
        </p>
        <p>
          <b>Release :</b> {props.movie.Released}
        </p>
        <p>
          <b>Genre :</b> {props.movie.Genre}
        </p>
        <p>
          <b>Duration :</b> {props.movie.Runtime}
        </p>
        <p>
          <b>Director :</b> {props.movie.Director}
        </p>
        <p>
          <b>Writer :</b> {props.movie.Writer}
        </p>
        <p>
          <b>Actors : </b> {props.movie.Actors}
        </p>
        <p>
          <b>Language : </b> {props.movie.Language}
        </p>
      </div>
    </section>
  );
}

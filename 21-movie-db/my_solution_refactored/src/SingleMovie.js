import React from "react";
import { useParams, Link } from "react-router-dom";
// import { API_ENDPOINT } from "./context";
import useFetch from "./hooks/useFetch";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleMovie = () => {
  const { id } = useParams();
  
  const { isLoading, error, fetchData: movie } = useFetch(`&i=${id}`);
  console.log("movie ==", movie);
 

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

  return (
    <section className="single-movie">
      <img
        src={movie.Poster === "N/A" ? url : movie.Poster}
        alt={movie.Title}
      />
      <div className="single-movie-info">
        <h2>{movie.Title}</h2>
        <p><b>Summary :</b> {movie.Plot}</p>
        <p><b>Release :</b> {movie.Released}</p>
        <p><b>Genre :</b> {movie.Genre}</p>
        <p><b>Duration :</b> {movie.Runtime}</p>
        <p><b>Director :</b> {movie.Director}</p>
        <p><b>Writer :</b> {movie.Writer}</p>
        <p><b>Actors : </b> {movie.Actors}</p>
        <p><b>Language : </b> {movie.Language}</p>
      </div>
    </section>
  );
};

export default SingleMovie;

import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=dfe0b61a43b7c1608dd9b6c649142bfb"
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      });
  }, []);

  return (
    <div className="container-fluid bg-black py-4 p-5">
      <h3 className="text-white mb-3">Popular on Netflix</h3>

      {/* Horizontal Row */}
      <div className="d-flex flex-row flex-nowrap overflow-auto">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="card bg-secondary text-white m-2"
            style={{ minWidth: "200px" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="card-img-top"
            />
            <div className="card-body p-2">
              <h6 className="card-title">{movie.title}</h6>
              <p className="card-text mb-1">⭐ {movie.vote_average}</p>
              <small>Release: {movie.release_date}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

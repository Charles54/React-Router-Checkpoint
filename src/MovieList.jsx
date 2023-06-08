import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-lg-4 col-md-6 mb-4 mt-5" key={movie.id}>
          <div className="card">
            <img
              src={movie.posterURL}
              className="card-img-top img-fluid mt-5"
              alt={movie.title}
              style={{ maxWidth: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">Rating: {movie.rating}</p>
              <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

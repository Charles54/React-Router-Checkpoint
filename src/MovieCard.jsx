import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Card.Img variant="top" src={movie.posterURL} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Link to={`/movies/${movie.id}`} className="btn btn-primary">
          View Details
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;

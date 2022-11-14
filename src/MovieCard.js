import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>{movie.date}</Card.Text>
          <Link to={`/trailer/${movie.id}`}>
            {" "}
            <Button variant="primary"> More details</Button>{" "}
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;

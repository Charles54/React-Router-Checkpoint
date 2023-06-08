import React from "react";
import { Form } from "react-bootstrap";

const Filter = ({
  filterTitle,
  filterRating,
  handleFilterTitle,
  handleFilterRating,
  handleAddMovie,
}) => {
  return (
    <div className="filter">
      <Form>
        <Form.Group controlId="filterTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={filterTitle}
            onChange={handleFilterTitle}
          />
        </Form.Group>
        <Form.Group controlId="filterRating">
          <Form.Label>Minimum Rating:</Form.Label>
          <Form.Control
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={filterRating}
            onChange={handleFilterRating}
          />
        </Form.Group>
      </Form>
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default Filter;

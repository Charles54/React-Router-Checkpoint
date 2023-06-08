import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import Filter from "./Filter";
import MovieDescription from "./MovieDescription";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: "1",
      title: "Nobody",
      description: "Description 1",
      posterURL: "https://m.media-amazon.com/images/I/91cOvFUJcdS._RI_.jpg",
      rating: 8.5,
      trailerLink: "https://www.youtube.com/embed/wZti8QKBWPo"
    },
    {
      id: "2",
      title: "The Mother",
      description: "Description 2",
      posterURL: "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/The_Mother_1683868595.webp",
      rating: 7.8,
      trailerLink: "https://www.youtube.com/embed/8BFdFeOS3oM"
    },
    // Add more movies here...
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const handleFilterTitle = (event) => {
    setFilterTitle(event.target.value);
  };

  const handleFilterRating = (event) => {
    setFilterRating(event.target.value);
  };

  const handleAddMovie = () => {
    const newMovie = {
      id: String(movies.length + 1),
      title: "New Movie",
      description: "New Description",
      posterURL: "https://example.com/poster3.jpg",
      rating: 9.0,
      trailerLink: "https://www.youtube.com/embed/trailer3"
    };

    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === "" || movie.rating >= filterRating)
  );

  return (
    <Router>
      <div className="app">
        <h1>Movie Library</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  filterTitle={filterTitle}
                  filterRating={filterRating}
                  handleFilterTitle={handleFilterTitle}
                  handleFilterRating={handleFilterRating}
                  handleAddMovie={handleAddMovie}
                />
                <MovieList movies={movies} />
              </>
            }
          />
          <Route path="/movies/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

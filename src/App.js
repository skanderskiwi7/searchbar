import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "./MovieList";
import Trailer from "./Trailer";
import Contact from "./Contact";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { moviesData } from "./Data";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(moviesData);

  const handleSearch = (e) => {
    console.log(e.target.value);

    let value = e.target.value;
    if (value.length == 0) {
      setMovies(moviesData);
    } else {
      const film = moviesData.filter((e) => {
        return e.name.toLowerCase().includes(value.toLowerCase());
      });
      setMovies(film);
    }
  };

  return (
    <div>
      <NavBar />
      <SearchBar search={handleSearch} />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/trailer/:id" element={<Trailer />} />
      </Routes>
    </div>
  );
}

export default App;

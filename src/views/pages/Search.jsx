import React, { useState } from "react";
import "../styles.css";
import { useSelector } from "react-redux";
import { BsFilm } from "react-icons/bs";
import Movie from "../components/Movie";

const Search = ({ toggleScreen }) => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div id="search-page">
      <aside>
        <h1 onClick={toggleScreen} className="logo">
          MVManage
        </h1>
        <button className="add-button" onClick={() => {}}>
          Create new
        </button>
      </aside>
      <main id="movie-main">
        <hr className="top-hr" />
        {movies?.data?.map((movie) => (
          <Movie movie={movie} />
        ))}
      </main>
    </div>
  );
};

export default Search;

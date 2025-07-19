import React, { useState } from "react";
import "../styles.css";
import { useSelector } from "react-redux";
import { BsFilm } from "react-icons/bs";
import Movie from "../components/Movie";
import CreateButton from "../components/CreateButton";

const Search = ({ toggleScreen }) => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div id="search-page">
      <aside>
        <h1 onClick={toggleScreen} className="logo">
          MVManage
        </h1>
        <CreateButton width={"100%"} />
      </aside>
      <main id="movie-main">
        <hr className="top-hr" />
        {movies?.data?.length > 0 ? (
          <div>
            {movies?.data?.map((movie) => (
              <Movie movie={movie} />
            ))}
          </div>
        ) : (
          <h2>There is no movies yet :(</h2>
        )}
      </main>
    </div>
  );
};

export default Search;

import React, { useEffect, useState } from "react";
import "../styles.css";
import { useDispatch, useSelector } from "react-redux";
import { BsFilm } from "react-icons/bs";
import Movie from "../components/Movie";
import CreateButton from "../components/CreateButton";
import { getMoviesList } from "../../data/api";

const Search = ({ toggleScreen }) => {
  const movies = useSelector((state) => state.movies.movies);
  const total = useSelector((state) => state.movies.total);
  const [sort, setSort] = useState(false);
  const dispatch = useDispatch();
  const [params, setParams] = useState({ search: "", actor: "", title: "" });

  useEffect(() => {
    console.log(params);
    getMoviesList(dispatch, {
      offset: 0,
      sort: sort ? "title" : "id",
      order: "ASC",
      ...params,
    });
  }, [params, sort]);

  return (
    <div id="search-page">
      <aside>
        <h1 onClick={toggleScreen} className="logo">
          MVManage
        </h1>
        <CreateButton width={"100%"} />
        <h2>Search global</h2>
        <input
          id="global"
          className="search-input"
          type="text"
          placeholder="Title or actor..."
          onChange={(e) => {
            document.getElementById("title-search").value = "";
            document.getElementById("actor-search").value = "";
            // if (e.target.value.trim().length > 1) {
            setParams({
              search: e.target.value,
              actor: "",
              title: "",
            });
            if (e.target.value.trim().length <= 1) {
              getMoviesList(dispatch, {
                offset: 0,
                sort: sort ? "title" : "id",
                order: "ASC",
                actor: "",
                title: "",
                search: "",
              });
            }
          }}
        />
        <hr className="top-hr" />
        <h2>Or use parameters</h2>

        <input
          id="title-search"
          className="search-input"
          type="text"
          placeholder="Title..."
          onChange={(e) => {
            document.getElementById("global").value = "";
            // if (e.target.value.trim().length > 1) {
            setParams({
              search: "",
              actor: params.actor,
              title: e.target.value,
            });
            if (e.target.value.trim().length <= 1) {
              getMoviesList(dispatch, {
                offset: 0,
                sort: sort ? "title" : "id",
                order: "ASC",
                actor: "",
                title: "",
                search: "",
              });
            }
          }}
        />
        <input
          id="actor-search"
          className="search-input"
          type="text"
          placeholder="Actor..."
          onChange={(e) => {
            document.getElementById("global").value = "";
            // if (e.target.value.trim().length > 1) {
            setParams({
              search: "",
              actor: e.target.value,
              title: params.title,
            });
            if (e.target.value.trim().length <= 1) {
              getMoviesList(dispatch, {
                offset: 0,
                sort: sort ? "title" : "id",
                order: "ASC",
                actor: "",
                title: "",
                search: "",
              });
            }
          }}
        />
        <label className="sort">
          <input
            type="checkbox"
            checked={sort}
            onChange={() => setSort(!sort)}
          />
          Sort by title DESC
        </label>
      </aside>
      <main id="movie-main">
        <hr className="top-hr" />

        {movies?.length > 0 ? (
          <div>
            {movies?.map((movie) => (
              <Movie movie={movie} key={movie.id} />
            ))}
            {movies.length < total && (
              <p
                className="more"
                onClick={() => {
                  getMoviesList(dispatch, {
                    offset: movies.length,
                    sort: sort ? "title" : "id",
                    order: "ASC",
                    ...params,
                  });
                }}
              >
                Show more
              </p>
            )}
          </div>
        ) : (
          <h2>There is no movies yet :(</h2>
        )}
      </main>
    </div>
  );
};

export default Search;

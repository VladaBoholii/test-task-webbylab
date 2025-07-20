import { useEffect, useState } from "react";
import "../styles.css";
import { BsFilm } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { getMoviesList } from "../../data/api";
import CreateButton from "../components/CreateButton";
import { useDispatch } from "react-redux";

const Main = ({ toggleScreen }) => {
  const dispatch = useDispatch()
  return (
    <main>
      <section id="main-page">
        <div className="icons">
          <div className="icon-slider">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="film-icon" key={i}>
                <BsFilm />
              </div>
            ))}
          </div>
          <div className="icon-slider">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="film-icon" key={i}>
                <BsFilm />
              </div>
            ))}
          </div>
        </div>
        <div id="main-info">
          <div className="main-text">
            <h1 className="logo">MVManage</h1>
            <h2 className="manage">Manage Movies</h2>
          </div>

          <section id="buttons">
            <button
              onClick={() => {
                getMoviesList(dispatch, {
                  offset: 0,
                  sort: "id",
                  order: "DESC",
                  actor: "",
                  title: "",
                  search: "",
                });
                toggleScreen();
              }}
              className="main-button"
            >
              Search
            </button>
            <CreateButton />
          </section>
        </div>

        <div className="icons">
          <div className="icon-slider-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="film-icon" key={i}>
                <BsFilm />
              </div>
            ))}
          </div>
          <div className="icon-slider-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="film-icon" key={i}>
                <BsFilm />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;

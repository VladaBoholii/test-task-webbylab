import { useEffect, useState } from "react";
import "../styles.css";
import { BsFilm } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <main>
      <section id="main-page">
        <button id="help">?</button>
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
            <button className="main-button">New</button>
            <button
              className="main-button"
              onClick={() => {
                navigate("/add-movie");
              }}
            >
              Add
            </button>
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

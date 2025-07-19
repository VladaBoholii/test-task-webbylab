import React, { useState } from "react";
import "../styles.css";
import { BsFilm } from "react-icons/bs";
import { LuDisc3 } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";

import { MdDelete } from "react-icons/md";
import { deleteMovie, getMoviesList } from "../../data/api";
import { useDispatch } from "react-redux";

const Movie = ({ movie }) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  return (
    <section>
      <p className="movie" onClick={() => setExpanded(!expanded)}>
        <div style={{ display: "flex" }}>
          <span className="info">
            <BsFilm />
            {`${movie?.title} (${movie?.year}) ${expanded ? " " : "..."}`}
          </span>
          <span
            className="delete"
            onClick={async () => {
              await deleteMovie(movie.id);
              getMoviesList(dispatch);
            }}
          >
            <MdDelete />
          </span>
        </div>

        {expanded && (
          <>
            <span className="info">
              <LuDisc3 />
              {movie?.format}
            </span>
            <span className="info">
              <IoPersonSharp />
              {movie?.actors
                ?.map((actor) => {
                  return actor.name;
                })
                .join(", ")}
            </span>
          </>
        )}
      </p>
      <hr />
    </section>
  );
};

export default Movie;

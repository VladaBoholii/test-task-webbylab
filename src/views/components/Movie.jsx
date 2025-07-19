import React, { useState } from "react";
import "../styles.css";
import { BsFilm } from "react-icons/bs";
import { LuDisc3 } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";

const Movie = ({ movie }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section>
      <p className="movie" onClick={() => setExpanded(!expanded)}>
        <p className="info">
          <BsFilm />
          {`${movie?.title} (${movie?.year}) ${expanded ? " " : "..."}`}
        </p>
        {expanded && (
          <>
            <p className="info">
              <LuDisc3 />
              {movie?.format}
            </p>
            <p className="info">
              <IoPersonSharp />
              {movie?.actors
                ?.map((actor) => {
                  return actor.name;
                })
                .join(", ")}
            </p>
          </>
        )}
      </p>
      <hr />
    </section>
  );
};

export default Movie;

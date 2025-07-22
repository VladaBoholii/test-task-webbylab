import React, { useState } from "react";
import "../styles.css";
import { BsFilm } from "react-icons/bs";
import { LuDisc3 } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";

import { MdDelete } from "react-icons/md";
import { deleteMovie, getMoviesList } from "../../data/api";
import { useDispatch } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

const Movie = ({ movie }) => {
  const [expanded, setExpanded] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const dispatch = useDispatch();

  return (
    <section>
      <p className="movie" onClick={() => setExpanded(!expanded)}>
        <span className="top" style={{ display: "flex" }}>
          <span className="info">
            <BsFilm />
            {`${movie?.title} (${movie?.year}) ${expanded ? " " : "..."}`}
          </span>
          <span
            className="delete"
            onClick={async (e) => {
              e.stopPropagation();
              setDeleteDialog(true);
            }}
          >
            <MdDelete />
          </span>
        </span>

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

      {deleteDialog && (
        <Dialog
          open={() => setDeleteDialog(true)}
          onClose={() => setDeleteDialog(false)}
        >
          <DialogTitle id="alert-dialog-title">
            {`Delete ${movie.title}?`}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This action can not be undone later
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button
              id="dialog-btn"
              className="cancel"
              onClick={() => setDeleteDialog(false)}
            >
              Cancel
            </button>
            <button
              id="dialog-btn"
              className="delete"
              onClick={async () => {
                await deleteMovie(movie.id);
                getMoviesList(dispatch, {
                  offset: 0,
                  sort: "id",
                  order: "DESC",
                  actor: "",
                  title: "",
                  search: "",
                });
              }}
            >
              Delete
            </button>
          </DialogActions>
        </Dialog>
      )}
    </section>
  );
};

export default Movie;

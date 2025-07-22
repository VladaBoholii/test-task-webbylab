import React, { useState } from "react";
import "../styles.css";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { createMovie, getMoviesList, importMovies } from "../../data/api";
import { useDispatch } from "react-redux";

const CreatePopup = ({ close, success }) => {
  const [importUpload, setImportUpload] = useState(false);
  const [fileContent, setFileContent] = useState("");
  const dispatch = useDispatch();

  const getText = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setFileContent("");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const content = reader.result;
      setFileContent(content);
    };

    reader.readAsText(file);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (importUpload) {
      const file = formData.get("file");
      const res = await importMovies(file);
      if (res == 1) {
        success()
        close();
      } else toast(res);
    } else {
      const values = Object.fromEntries(formData.entries());
      if (/^[A-Z][A-Za-z- ,.]*$/.test(values.actors.trim())) {
        values.title =
          values.title.charAt(0).toUpperCase() +
          values.title.slice(1).toLowerCase();
        values.year = Number(values.year);
        values.actors = [values.actors]
        console.log(values)
        const res = await createMovie(values);
        if (res == 1) {
          success()
          close();
        } else toast(res);
      } else
        toast(
          "Actors field input must start with capital letter and contain only letters, spaces, hyphens, commas or dots"
        );
    }

    getMoviesList(dispatch, {
      offset: 0,
      sort: "id",
      order: "DESC",
      actor: "",
      title: "",
      search: "",
    });
  };

  return (
    <div id="create-popup">
      <Toaster
        toastOptions={{
          className: "",
          style: {
            padding: "16px",
            letterSpacing: "0",
          },
        }}
      />
      <div className="popup">
        <form id="user-form" onSubmit={(e) => formSubmit(e)}>
          <div className="head">
            <h1 className="logo">MVManage</h1>
            <h2>
              {importUpload ? "Choose the file or" : "Fill the fields or"}
              <p onClick={() => setImportUpload(!importUpload)}>
                {importUpload ? "add manually" : "import via file"}
              </p>
            </h2>
          </div>
          {importUpload ? (
            <div id="add-form">
              <input
                required
                name="file"
                onChange={(e) => {
                  getText(e);
                }}
                className="form-input"
                type="file"
                accept="text/*"
              />
              {fileContent && (
                <section className="import-data">{fileContent}</section>
              )}
            </div>
          ) : (
            <div id="add-form">
              <div className="input-group">
                <input
                  required
                  className="form-input"
                  name="title"
                  type="text"
                  placeholder=""
                  pattern=".*\S.*"
                />
                <label className="form-label">Title</label>
              </div>{" "}
              <div className="input-group">
                <input
                  required
                  name="year"
                  className="form-input"
                  type="number"
                  min={1888}
                  max={new Date().getFullYear()}
                  placeholder=""
                />
                <label className="form-label">Release year</label>
              </div>{" "}
              <div className="input-group">
                <select className="form-select" name="format">
                  <option value={"VHS"}>VHS</option>
                  <option value={"DVD"}>DVD</option>
                  <option value={"Blu-Ray"}>Blu-Ray</option>
                </select>
                <label className="form-label">Format</label>
              </div>{" "}
              <div className="input-group">
                <input
                  required
                  minLength={2}
                  type="text"
                  className="form-input"
                  name="actors"
                  placeholder="actors"
                />
                <label className="form-label">Actors</label>
              </div>
            </div>
          )}
          <button className="form-btn" type="submit">
            {importUpload ? " Import" : "Add new movie"}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              close();
            }}
            className="cancel-btn"
            type="button"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePopup;

import React, { useState } from "react";
import "../styles.css";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { createMovie, getMoviesList, importMovies } from "../../data/api";
import { useDispatch } from "react-redux";

const CreatePopup = ({ close }) => {
  const [importUpload, setImportUpload] = useState(false);
  const [fileContent, setFileContent] = useState("");
  const [cast, setCast] = useState([]);
  const [star, setStar] = useState("");
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

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (importUpload) {
      const file = formData.get("file");
      console.log(formData)
      importMovies(file);
    } else {
      if (cast.length == 0) {
        toast("What about actors?");
        return;
      }
      const values = Object.fromEntries(formData.entries());
      values.actors = cast;
      values.year = Number(values.year);
      createMovie(values);
      console.log(values);
      getMoviesList(dispatch);
    }
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
                  <option value={"Blue-ray"}>Blu-ray</option>
                </select>
                <label className="form-label">Format</label>
              </div>{" "}
              <div className="input-group">
                <input
                  onChange={(e) => setStar(e.target.value.trim())}
                  type="text"
                  className="form-input"
                  name="actors"
                  placeholder="sctors"
                />
                <label className="form-label">Actors</label>
                <p
                  className="add-star"
                  onClick={() => {
                    setCast(
                      (prev) =>
                        prev.includes(star)
                          ? prev.filter((a) => a !== star) // remove if exists
                          : [...prev, star] // add if not exists
                    );

                    document.querySelector('input[name="actors"]').value = "";
                  }}
                >
                  {cast.includes(star) ? (
                    <IoIosRemoveCircle />
                  ) : (
                    <IoIosAddCircle />
                  )}
                </p>
              </div>
              {cast && (
                <div className="star-list">
                  {cast?.map((actor) => actor).join(", ")}
                </div>
              )}
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

    // <main id="popup-bg">
    //   <fieldset id="add-fields">
    //     <div className="head">
    //       <h1 className="logo">MVManage</h1>
    //       <h2>
    //         {importUpload ? "Choose the file or" : "Fill the fields or"}
    //         <p onClick={() => setImportUpload(!importUpload)}>
    //           {importUpload ? "add manually" : "import via file"}
    //         </p>
    //       </h2>
    //     </div>
    //     {/* {importUpload ? <ImportForm /> : <AddForm />} */}
    //   </fieldset>
    // </main>
  );
};

export default CreatePopup;

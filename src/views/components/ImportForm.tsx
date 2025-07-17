import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const ImportForm = () => {
  const navigator = useNavigate();
  return (
    <form onSubmit={() => console.log("imp")} id="add-form">
      <input className="form-input" type="file" />
      <button className="form-btn" type="submit">
        Import
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigator(-1);
        }}
        className="cancel-btn"
        type="button"
      >
        Cancel
      </button>
    </form>
  );
};

export default ImportForm;

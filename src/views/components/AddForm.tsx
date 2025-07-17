import React, { useState } from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const navigator = useNavigate();
  return (

      <form onSubmit={() => console.log("suub")} id="add-form">
        <div className="input-group">
          <input className="form-input" placeholder="" />
          <label className="form-label">Title</label>
        </div>{" "}
        <div className="input-group">
          <input className="form-input" type="date" placeholder="" />
          <label className="form-label">Release date</label>
        </div>{" "}
        <div className="input-group">
          <select className="form-select">
            <option value={"VHS"}>VHS</option>
            <option value={"DVD"}>DVD</option>
            <option value={"Blue-ray"}>Blu-ray</option>
          </select>
          <label className="form-label">Format</label>
        </div>{" "}
        <div className="input-group">
          <input className="form-input" placeholder="" />
          <label className="form-label">Cast</label>
        </div>
        <button className="form-btn" type="submit">
          Add
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

export default AddForm;

// // 2. Назва фільму
// 3. Рік випуску
// 4. Формат (VHS, DVD, Blu-ray)
// 5. Список акторів (“Ім'я та прізвище актора”)

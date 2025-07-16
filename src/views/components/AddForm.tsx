import React from "react";
import "../styles.css";

const AddForm = () => {
  return (
    <main>
      <form onSubmit={() => console.log("suub")} id="add-form">
        <fieldset id="add-fields">
          <div className="head">
            <h1 className="logo">MVManage</h1>
            <h2>Add new movie</h2>
          </div>
          <div className="input-group">
            <input className="form-input" placeholder="title" />
            <label className="form-label">Title</label>
          </div>{" "}
          <div className="input-group">
            <input className="form-input" placeholder="date" />
            <label className="form-label">Release date</label>
          </div>{" "}
          <div className="input-group">
            <select className="form-select">
              <option value={'VHS'}>VHS</option>
              <option value={'DVD'}>DVD</option>
              <option value={'Blue-ray'}>Blu-ray</option>
            </select>
            <label className="form-label">Format</label>
          </div>{" "}
          <div className="input-group">
            <input className="form-input" placeholder="cast" />
            <label className="form-label">Cast</label>
          </div>
          <button className="form-btn" type="submit">
            Add
          </button>
        </fieldset>
      </form>
    </main>
  );
};

export default AddForm;

// // 2. Назва фільму
// 3. Рік випуску
// 4. Формат (VHS, DVD, Blu-ray)
// 5. Список акторів (“Ім'я та прізвище актора”)

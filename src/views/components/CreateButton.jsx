import React, { useState } from "react";
import AddPage from "./AddForm";

const CreateButton = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="main-button"
        // onClick={() => {
        //   navigate("add-movie");
        // }}
      >
        Create
      </button>
      {open && <AddPage />}
    </>
  );
};

export default CreateButton;

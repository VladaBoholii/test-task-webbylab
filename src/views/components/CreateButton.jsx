import React, { useState } from "react";
import CreatePopup from "./CreatePopup";

const CreateButton = ({ width }) => {
  const [open, setOpen] = useState(false);

  const closePopup = () => {
    setOpen(!open);
  };
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="main-button"
        style={{ width: width }}
        // onClick={() => {
        //   navigate("add-movie");
        // }}
      >
        Create
      </button>
      {open && <CreatePopup close={closePopup} />}
    </>
  );
};

export default CreateButton;

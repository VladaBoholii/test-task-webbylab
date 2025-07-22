import React, { useState } from "react";
import CreatePopup from "./CreatePopup";
import toast, { Toaster } from "react-hot-toast";

const CreateButton = ({ width }) => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const closePopup = () => {
    setOpen(!open);
  };

  const showAlert = () => {
    toast("Added successfully", { duration: 3000 });
  };
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="main-button"
        style={{ width: width }}
      >
        Create
      </button>
      {open && <CreatePopup close={closePopup} success={showAlert} />}
      <Toaster
        toastOptions={{
          className: "",
          style: {
            padding: "16px",
            letterSpacing: "0",
          },
        }}
      />
    </>
  );
};

export default CreateButton;

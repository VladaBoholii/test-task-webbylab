import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const ImportForm: React.FC = () => {
  const navigator = useNavigate();
  const [fileContent, setFileContent] = useState<string>("");

  const getText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setFileContent("");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const content = reader.result as string;
      console.log(content);
      setFileContent(content);
    };

    reader.readAsText(file);
  };

  return (
    <form onSubmit={() => console.log("imp")} id="add-form">
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          getText(e);
        }}
        className="form-input"
        type="file"
        accept="text/*"
      />
      {fileContent && <section className="import-data">{fileContent}</section>}
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

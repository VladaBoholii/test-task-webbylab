import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import AddForm from "../components/AddForm";
import ImportForm from "../components/ImportForm";

const AddPage = () => {
  const [importUpload, setImportUpload] = useState(true);
  return (
    <main id="form-main">
      <fieldset id="add-fields">
        <div className="head">
          <h1 className="logo">MVManage</h1>
          <h2>
            {importUpload ? "Choose the file or" : "Fill the fields or"}
            <p onClick={() => setImportUpload(!importUpload)}>
              {importUpload ? "add manually" : "import via file"}
            </p>
          </h2>
        </div>
        {importUpload ? <ImportForm /> : <AddForm />}
      </fieldset>
    </main>
  );
};

export default AddPage;

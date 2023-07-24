import React, { useState } from "react";
import fireDB from "../../firebase";
import "./fileupload.scss";

// const department = localStorage.getItem("dep");
// const semester = localStorage.getItem("sem");
const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = async () => {
    console.log(selectedFile);
    const fileRef = fireDB
      .storage()
      .ref()
      .child(
        `PYQs/${localStorage.getItem("dep")}/${localStorage.getItem("sem")}/${
          selectedFile.name
        }`
      );
    await fileRef.put(
      selectedFile,
      alert(`${selectedFile.name} Uploded Successfully 👍👍👍`),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  };
  return (
    <div className="uploadSection">
      <h2>
        "{localStorage.getItem("dep")}" {"->"} "{localStorage.getItem("sem")}"
      </h2>
      <h1>Upload File</h1>
      <h4>
        First rename the file as: Subject-202X-2Y.pdf (e.g.
        Mathematics-2020-21.pdf)
      </h4>
      <div className="filebtn">
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button id="btn" onClick={handleFileUpload}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default FileUpload;

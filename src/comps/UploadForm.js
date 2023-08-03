import React, { useState } from "react";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(" ");
    } else {
      setFile(null);
      setError("Please choose correct file type.");
    }
  };

  return (
    <div>
      <form>
        <input type="file" onChange={changeHandler} />
        <div className="output">
          {error && <div className="error"> {error} </div>}
        </div>
      </form>
    </div>
  );
}

export default UploadForm;

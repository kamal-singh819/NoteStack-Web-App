import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./upload.scss";
const Upload = () => {
  const [flag, setFlag] = useState(false);
  const nav = useNavigate();

  const click = (e) => {
    localStorage.setItem("dep", e.target.value);
    if (flag) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const click1 = (e) => {
    localStorage.setItem("sem", e.target.value);
    nav("/file_upload");
  };

  return (
    <div>
      <h3>Select a Stream</h3>
      <button onClick={click} value="CSE">
        CSE
      </button>

      <button onClick={click} value="IT">
        IT
      </button>

      <button onClick={click} value="ECE">
        ECE
      </button>
      <button onClick={click} value="EE">
        EE
      </button>
      <button onClick={click} value="CE">
        CE
      </button>

      {/* Now choose Semester */}
      {flag ? (
        <div>
          <br />
          <hr />
          <h3>Now Select Semester</h3>
          <button onClick={click1} value="1st Sem">
            1st Sem
          </button>
          <button onClick={click1} value="2nd Sem">
            2nd Sem
          </button>
          <button onClick={click1} value="3rd Sem">
            3rd Sem
          </button>
          <button onClick={click1} value="4th Sem">
            4th Sem
          </button>
          <button onClick={click1} value="5th Sem">
            5th Sem
          </button>
          <button onClick={click1} value="6th Sem">
            6th Sem
          </button>
          <button onClick={click1} value="7th Sem">
            7th Sem
          </button>
          <button onClick={click1} value="8th Sem">
            8th Sem
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Upload;

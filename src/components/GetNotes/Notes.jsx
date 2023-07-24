import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./notes.scss";
const Notes = () => {
  const [flag, setFlag] = useState(false);
  const nav = useNavigate();

  const click = (e) => {
    localStorage.setItem("department", e.target.value);
    if (flag) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const click1 = (e) => {
    localStorage.setItem("semester", e.target.value);
    nav("/get_pdf");
  };

  return (
    <div>
      <h1>Select Your Stream</h1>
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

      {/* Sem */}
      {flag ? (
        <div>
          <br />
          <hr />
          <h1>Now Select your Semester</h1>
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

export default Notes;

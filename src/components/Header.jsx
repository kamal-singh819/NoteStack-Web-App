import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const linkClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <h1>NoteStack</h1>
      <main className={`menu ${showMenu ? "open" : ""}`}>
        <HashLink to={"/"} onClick={linkClick}>
          {" "}
          Home{" "}
        </HashLink>
        <HashLink to={"/notes"} onClick={linkClick}>
          {" "}
          Notes{" "}
        </HashLink>
        <HashLink to={"/contact"} onClick={linkClick}>
          {" "}
          Contact{" "}
        </HashLink>
        <HashLink to={"/about"} onClick={linkClick}>
          {" "}
          About{" "}
        </HashLink>
        <HashLink to={"/authen"} onClick={linkClick}>
          {" "}
          Admin{" "}
        </HashLink>
      </main>
      <div className="menu-button" onClick={toggleMenu}>
        Menu
      </div>
    </nav>
  );
};
export default Header;

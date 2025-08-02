import React, { useState } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

const Header = (props) => {
  const [mode, setMode] = useState(false);

  const handleClick = () => {
    const newMode = !mode;
    setMode(newMode);
    document.documentElement.style.backgroundColor = newMode
      ? "#121212"
      : "#ffffff";
    document.documentElement.style.color = newMode ? "#f3f4f6" : "#111827";
  };

  return (
    <header className="header">
      <div className="header-left">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <p className="username">Welcome, {props.username}</p>
      </div>
      <button className="mode-toggle" onClick={handleClick}>
        {mode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;

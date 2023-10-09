import React, { useContext, useState } from "react";
import "./NavButton.css";
import { AppContext } from "./AppContextProvider";

function Navbutton() {
  const [isOpen, setIsOpen, handleClickSidebar] = useContext(AppContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
    handleClickSidebar();
  };

  return (
    <button
      id="navButton"
      className={`nav-button ${isOpen ? "open" : ""} mr-3`}
      onClick={handleClick}
    >
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col justify-between">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </button>
  );
}

export default Navbutton;

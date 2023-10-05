import React, { useState } from "react";
import "./NavButton.css";

function Navbutton({ handleClickSidebar }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    handleClickSidebar();
  };

  return (
    <button
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

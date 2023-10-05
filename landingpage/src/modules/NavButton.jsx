import React, { useState } from "react";
import "./NavButton.css"; // Assuming you have a CSS file for custom styles

function Navbutton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={`nav-button ${isOpen ? "open" : ""}`}
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

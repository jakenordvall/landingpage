import React, { createContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Create a provider component
const AppContextProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false); // states for hamburger menu and sidebar
  const handleClickSidebar = () => {
    setClicked(!clicked);
  };
  const [isOpen, setIsOpen] = useState(false);
  ///////////////////////////////////////

  return (
    <AppContext.Provider
      value={[clicked, setClicked, handleClickSidebar, isOpen, setIsOpen]}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

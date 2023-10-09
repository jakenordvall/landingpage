import { useState } from "react";
import Heading from "./modules/Heading";
import Navbar from "./modules/Navbar";
import Sidebar from "./modules/Sidebar";
import GoToTopButton from "./modules/GoToTopButton";
import "./App.css";
import IntroSection from "./modules/IntroSection";

function App() {
  const [clicked, setClicked] = useState(false); // states for hamburger menu and sidebar
  const handleClickSidebar = () => {
    setClicked(!clicked);
  };

  return (
    <div className="bg-customBlue50 h-screen">
      <Navbar handleClickSidebar={handleClickSidebar}></Navbar>
      <Sidebar
        clicked={clicked}
        handleClickSidebar={handleClickSidebar}
      ></Sidebar>
      <IntroSection></IntroSection>
      <GoToTopButton></GoToTopButton>
    </div>
  );
}

export default App;

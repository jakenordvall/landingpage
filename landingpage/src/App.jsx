import { AppContextProvider } from "./modules/AppContextProvider";
import Navbar from "./modules/Navbar";
import Sidebar from "./modules/Sidebar";
import GoToTopButton from "./modules/GoToTopButton";
import "./App.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  //paralex consist of multiple pages that will take upp the whole page,
  //these are parallaxLayers
  //factor of 1 property means that the image will take up 1 page,
  //you can make it span multiple pages with this prop.
  return (
    <AppContextProvider>
      <div className="bg-customBlue50 h-screen">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Parallax pages={4}>
          <ParallaxLayer speed={1}>
            <h2>HEJ</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <h2>JAG</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={2}>
            <h2>Heter</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={3}>
            <h2>Jake</h2>
          </ParallaxLayer>
        </Parallax>
        <GoToTopButton></GoToTopButton>
      </div>
    </AppContextProvider>
  );
}

export default App;

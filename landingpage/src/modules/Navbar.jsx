import Navbutton from "./NavButton";

function Navbar({ handleClickSidebar }) {
  return (
    <div className="flex flex-row justify-end min-w-full min-h-fit p-2 bg-black">
      <div></div>
      <Navbutton handleClickSidebar={handleClickSidebar} />
    </div>
  );
}

export default Navbar;

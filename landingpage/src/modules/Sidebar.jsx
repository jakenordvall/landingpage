import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";

import { AppContext } from "./AppContextProvider";

function Sidebar() {
  const [clicked, handleClickSidebar, setIsOpen] = useContext(AppContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("sidebar");
      const button = document.getElementById("navButton");

      if (
        clicked &&
        sidebar &&
        !sidebar.contains(event.target) &&
        button &&
        !button.contains(event.target)
      ) {
        handleClickSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clicked]);

  return (
    <motion.nav
      id="sidebar"
      className={`fixed left-0 top-0 z-10 h-screen w-60  backdrop-blur-sm  bg-white/20 `}
      initial={{ x: !clicked - 600 }}
      animate={{ x: clicked ? 0 : -600, opacity: 1 }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 300,
        duration: 0.5,
      }}
    >
      <motion.ul className="mt-14 grid grid-flow-row auto-cols-max h-full justify-around">
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Coming soon
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Coming soon
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Coming soon
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}

export default Sidebar;

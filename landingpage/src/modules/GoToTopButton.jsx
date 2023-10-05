import { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { motion } from "framer-motion";

function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    // Handle button click logic here
  };

  return (
    <motion.button
      className="btn-scrollTop fixed font-size text-4xl  right-3.5 bottom-5"
      whileHover={{ scale: 2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={handleClick}
    >
      <ArrowUpwardIcon className="transition-opacity duration-300 hover:opacity-100 opacity-20" />
    </motion.button>
  );
}

export default GoToTopButton;

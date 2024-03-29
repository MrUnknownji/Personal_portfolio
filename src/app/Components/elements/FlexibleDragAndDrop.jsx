import React, { useRef } from "react";
import { motion } from "framer-motion";

const FlexibleDragAndDrop = ({ children }) => {
  const constraintsRef = useRef(null);

  return (
    <motion.div ref={constraintsRef} className="bg-transparent rounded-xl">
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="bg-transparent rounded-2xl"
        transition={{ type: "spring" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FlexibleDragAndDrop;

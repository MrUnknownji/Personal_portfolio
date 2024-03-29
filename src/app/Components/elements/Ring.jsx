import React, { useState } from "react";
import { motion } from "framer-motion";

const Ring = () => {
  return (
    <>
      <motion.div
        className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-52 h-52 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
        initial={{ rotateZ: 0 }}
        animate={{ rotateZ: 360 }}
        transition={{
          ease: "linear",
          duration: 3,
          repeat: Infinity,
          delay: 0,
          repeatType: "loop",
        }}
      />
      {/* <motion.div
        className="z-20 absolute top-[50%] left-[50%] w-40 h-40 rounded-full flex items-center justify-center bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 shadow-sm"
        initial={{ rotateZ: 0 }}
        animate={{ rotateZ: -360 }}
        transition={{
          ease: "linear",
          duration: 2,
          repeat: Infinity,
          delay: 0,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="z-30 absolute top-[50%] left-[50%] w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-sm"
        initial={{ rotateZ: 0 }}
        animate={{ rotateZ: 360 }}
        transition={{
          ease: "linear",
          duration: 1,
          repeat: Infinity,
          delay: 0,
          repeatType: "loop",
        }}
      /> */}
    </>
  );
};

export default Ring;

import React, { createContext, useState } from "react";

export const ImageContext = createContext({
//   theme: false,
//   updateFlag: () => {},
});

const ImageProvider = ({ children }) => {
    const [flag, setFlag] = useState(false);
    
    const updateFlag = () => {
        setFlag(!flag);
    }

  return (
    <ImageContext.Provider value={{ flag, updateFlag }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;

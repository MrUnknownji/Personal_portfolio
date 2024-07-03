import React, { createContext, useState } from "react";

let isWindowsOrMac = false;
if (typeof navigator !== "undefined") {
  isWindowsOrMac = /(Windows|Macintosh|Mac Os)/i.test(navigator.userAgent);
}

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(isWindowsOrMac);
  const [isFlagged, setIsFlagged] = useState(false);

  const toggleFlag = () => {
    setIsFlagged((prevFlag) => !prevFlag);
  };

  return (
    <AppContext.Provider value={{ isDesktop, isFlagged, toggleFlag }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

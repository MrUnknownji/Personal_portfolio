import React, { createContext, useState } from "react";

let isWindowsOrMac = false;
if (typeof navigator !== "undefined") {
  isWindowsOrMac = /(Windows|Macintosh|Mac Os)/i.test(navigator.userAgent);
}

export const DeviceTypeContext = createContext({});

const DeviceTypeProvider = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(isWindowsOrMac);

  return (
    <DeviceTypeContext.Provider value={{ isDesktop }}>
      {children}
    </DeviceTypeContext.Provider>
  );
};

export default DeviceTypeProvider;

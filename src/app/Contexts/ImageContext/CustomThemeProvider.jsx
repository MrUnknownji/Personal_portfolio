import React, { createContext, useState } from "react";

export const CustomThemeContext = createContext({
//   darkTheme: false,
//   updateTheme: () => {},
});

const CustomThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const updateTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <CustomThemeContext.Provider value={{ darkTheme, updateTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;

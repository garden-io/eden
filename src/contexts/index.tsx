/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { createContext, useContext, useState } from "react";

import { merge } from "lodash.merge";
import { theme } from "../themes";

export const ThemeContext = createContext({
  theme,
  toggleMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [currentTheme] = useState(theme);
  const [darkMode, setDarkMode] = useState(false);

  const value = {
    theme: merge(currentTheme, {
      colors: darkMode ? currentTheme.darkColors : currentTheme.lightColors,
    }),
    toggleMode: () => {
      setDarkMode(!darkMode);
    },
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme: themeFromContext, toggleMode } = useContext(ThemeContext);
  return { ...themeFromContext, toggleMode };
};

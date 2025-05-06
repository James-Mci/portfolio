import React from 'react'
import {useState, createContext } from 'react';

const Theme = () => {
    const ThemeContext = createContext({
      isDarkMode: false,
      toggleTheme: () => {},
    });
    const [isDarkMode, setIsDarkMode] = useState(false);
        const toggleTheme = () => {
          setIsDarkMode(!isDarkMode);
          document.documentElement.classList.toggle('dark');
        };
        const themeContextValue = {
          isDarkMode,
          toggleTheme,
        };
        return (
          <ThemeContext.Provider value={themeContextValue}>
            
          </ThemeContext.Provider>
        );
}

export default Theme
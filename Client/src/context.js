import { useContext, useEffect, useState, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState();
  const [searchTerm, setSearchTerm] = useState("Africa novels");
  const toggleDarkTheme = () => {
    const newDarktheme = !isDarkTheme;
    setIsDarkTheme(newDarktheme);

    const body = document.body;
    // Modify body element or perform other actions
    body.classList.toggle("dark-theme", newDarktheme);
    console.log(body);
  };

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}{" "}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

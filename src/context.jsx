import React, { createContext, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { PAGES } from "./constants";

const useCurrentRoute = () => {
  const location = useLocation();
  return location.pathname.toLowerCase();
};

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const navigate = useNavigate();
  const currentRoute = useCurrentRoute();

  const currentPage = PAGES.find((item) => item.route === currentRoute);

  const [selectedButton, setSelectedButton] = useState(currentPage?.page);

  const handleItemClick = (route, page, needNavigate) => {
    if (currentRoute !== route) {
      if (needNavigate) navigate(route);
      setSelectedButton(page);
    }
  };

  return (
    <NavigationContext.Provider value={{ selectedButton, handleItemClick }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => useContext(NavigationContext);

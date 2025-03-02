import React, { createContext, useState, useContext, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";
import { PAGES, PagesEnum } from "./constants";

const useCurrentRoute = (): string => {
  const location = useLocation();
  return location.pathname.toLowerCase();
};

type NavigationProviderProps = {
  children: ReactNode;
};

type PagesEnumValues = (typeof PagesEnum)[keyof typeof PagesEnum];

interface NavigationContextType {
  selectedButton: PagesEnumValues | undefined;
  handleItemClick: (
    route: string | undefined,
    page: PagesEnumValues | undefined,
    needNavigation?: boolean,
  ) => void;
}

const DefaultNavigationContext: NavigationContextType = {
  selectedButton: undefined,
  handleItemClick: () => {},
};

const NavigationContext = createContext<NavigationContextType>(
  DefaultNavigationContext,
);

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const navigate = useNavigate();
  const currentRoute = useCurrentRoute();

  const currentPage = PAGES.find((item) => item.route === currentRoute);

  const [selectedButton, setSelectedButton] = useState<
    PagesEnumValues | undefined
  >(currentPage?.page);

  const handleItemClick = (
    route: string | undefined,
    page: PagesEnumValues | undefined,
    needNavigation = true,
  ) => {
    if (!route || !page) return;

    if (currentRoute !== route) {
      if (needNavigation) navigate(route);
      setSelectedButton(page);
    }
  };

  return (
    <NavigationContext.Provider value={{ selectedButton, handleItemClick }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () =>
  useContext<NavigationContextType>(NavigationContext);

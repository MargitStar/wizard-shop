import React, { useState } from "react";
import Header from "./components/Header";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import Elixirs from "./components/Elixirs";
import Wizards from "./components/Wizards";
import Houses from "./components/Houses";
import Spells from "./components/Spells";
import Ingredients from "./components/Ingredients";
import Home from "./components/Home";
import { PAGES } from "./constants";

const useCurrentRoute = () => {
  const location = useLocation();
  return location.pathname;
};

const App = () => {
  const navigate = useNavigate();
  const currentRoute = useCurrentRoute();
  const currentPage = PAGES.filter(
    (item) => item.route === currentRoute.toLowerCase()
  )[0];

  const [selectedButton, setSelectedButton] = useState(currentPage.page);

  const handleItemClick = (route, page) => {
    if (currentRoute !== route) {
      navigate(route);
      setSelectedButton(page);
    }
  };

  return (
    <>
      <Header
        handleItemClick={handleItemClick}
        selectedButton={selectedButton}
      />
      <Routes>
        <Route path="/" element={<Home handleItemClick={handleItemClick} />} />
        <Route path="/elixirs" element={<Elixirs />} />
        <Route path="/wizards" element={<Wizards />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Routes>
    </>
  );
};

export default App;

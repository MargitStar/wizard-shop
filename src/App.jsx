import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import { NavigationProvider } from "./context";
import Houses from "./modules/Houses/components/Houses";
import Elixirs from "./modules/Elixirs/components/Elixirs";
import Spells from "./modules/Spells/components/Spells";
import Wizards from "./modules/Wizards/components/Wizards";
import Ingredients from "./modules/Ingredients/components/Ingredients";

const App = () => {
  return (
    <>
      <NavigationProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elixirs" element={<Elixirs />} />
          <Route path="/wizards" element={<Wizards />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/ingredients" element={<Ingredients />} />
        </Routes>
      </NavigationProvider>
    </>
  );
};

export default App;

import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import { NavigationProvider } from "./context";
import Houses from "./modules/Houses/components/ListView";
import Elixirs from "./modules/Elixirs/components/ListView";
import Spells from "./modules/Spells/components/ListView";
import Wizards from "./modules/Wizards/components/ListView";
import Ingredients from "./modules/Ingredients/components/ListView";
import Home from "./modules/Home/components/Home";

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

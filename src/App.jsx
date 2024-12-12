import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Elixirs from "./components/Elixirs";
import Wizards from "./components/Wizards/Wizards";
import Houses from "./components/Houses";
import Spells from "./components/Spells";
import Ingredients from "./components/Ingredients";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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

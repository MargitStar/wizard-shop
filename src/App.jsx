import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import { NavigationProvider } from "./context";
import Houses from "./modules/Houses/components/ListView";
import Elixirs from "./modules/Elixirs/components/ListView";
import Spells from "./modules/Spells/components/ListView";
import Wizards from "./modules/Wizards/components/ListView";
import Ingredients from "./modules/Ingredients/components/ListView";
import NotFound from "./modules/NotFound/components/NotFound";
import Home from "./modules/Home/components/Home";
import Login from "./modules/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  return (
    <>
      <NavigationProvider>
        {isAuthorized && <Header />}
        <Routes>
          <Route
            path="/login"
            element={<Login isAuthorized={isAuthorized} />}
          />

          <Route element={<ProtectedRoute isAuthorized={isAuthorized} />}>
            <Route path="/" element={<Home />} />
            <Route path="/elixirs" element={<Elixirs />} />
            <Route path="/wizards" element={<Wizards />} />
            <Route path="/houses" element={<Houses />} />
            <Route path="/spells" element={<Spells />} />
            <Route path="/ingredients" element={<Ingredients />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </NavigationProvider>
    </>
  );
};

export default App;

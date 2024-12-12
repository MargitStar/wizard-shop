import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import React from "react";
import { BrowserRouter } from "react-router";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

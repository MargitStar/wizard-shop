import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import React from "react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store.js";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);

import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
window.React = React;

import App from "./components/App/App";

import "modern-normalize";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

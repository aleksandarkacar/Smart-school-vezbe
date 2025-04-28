import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; //Default postoji
// import {App} from "./App.jsx";//Default ne postoji
import "./main.css";
import "../scss/styles.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

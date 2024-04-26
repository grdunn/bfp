import React from "react";
import ReactDOM from "react-dom/client";
import Cta from "./Cta.tsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("cta")!).render(
  <React.StrictMode>
    <Cta />
  </React.StrictMode>
);

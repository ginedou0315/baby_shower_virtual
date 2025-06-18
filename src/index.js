import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Mock reportError and trickle functions for compatibility
window.reportError =
  window.reportError ||
  function (error) {
    console.error("Reported error:", error);
  };

// Mock trickle functions for demo mode
window.trickleListObjects =
  window.trickleListObjects ||
  async function () {
    return { items: [] };
  };

window.trickleCreateObject =
  window.trickleCreateObject ||
  async function () {
    return { objectId: Date.now().toString() };
  };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

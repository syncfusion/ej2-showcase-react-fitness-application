import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Tab from "./tab";


const App = () => (
  <React.Suspense fallback>
    <h1 className="sr-only">Fitness Tracker</h1>
    <Tab></Tab>
  </React.Suspense>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);

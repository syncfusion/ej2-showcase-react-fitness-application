import React from "react";
import { createRoot } from "react-dom/client";
import Diet from "./Diet";

import "./index.css";

const App = () => (
  <Diet></Diet>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);

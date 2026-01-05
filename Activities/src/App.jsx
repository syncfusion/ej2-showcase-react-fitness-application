import React from "react";
import { createRoot } from "react-dom/client";
import Activities from "./Activities";

import "./index.css";

const App = () => (
    <Activities></Activities>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);

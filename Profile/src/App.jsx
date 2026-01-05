import React from "react";
import { createRoot } from "react-dom/client";
import Profile from "./Profile";

import "./index.css";

const App = () => (
   <Profile></Profile>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);

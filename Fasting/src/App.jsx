import React from "react";
import { createRoot } from "react-dom/client";
import Fasting from "./Fasting";

import "./index.css";

const App = () => (
 <Fasting></Fasting>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);

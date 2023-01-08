import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
	<App />
);

reportWebVitals();
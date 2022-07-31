import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Fighter from "./myDiv.js";
import fighterData from "./data.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Fighter of the week</h1>
      <hr />
      <Fighter fighters={fighterData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

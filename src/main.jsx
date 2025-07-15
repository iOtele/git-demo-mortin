import { createRoot } from "react-dom/client";
import StoreContextProvider from "./Context/StoreContext.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
);

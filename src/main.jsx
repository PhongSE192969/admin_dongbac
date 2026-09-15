import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AdminAppProvider } from "./context/AdminAppContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminAppProvider>
        <App />
      </AdminAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

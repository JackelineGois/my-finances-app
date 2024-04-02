import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthenticatedProvider from "./main/AuthenticationProvider";

import router from "./main/routes";

import App from "./main/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthenticatedProvider>
      <div className="container">
        <RouterProvider router={router} />
        <App />
      </div>
    </AuthenticatedProvider>
  </React.StrictMode>
);

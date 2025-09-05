import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="pb-25 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);

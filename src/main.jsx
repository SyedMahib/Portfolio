import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Router.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]"></div>
    <div
      className="pb-25 relative z-10 bg-gradient-to-br from-gray-950 via-blue-900/10 to-gray-950 min-h-screen"
    >
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  </StrictMode>
);

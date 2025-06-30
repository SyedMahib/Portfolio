import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Projects from "../Components/Projects/Projects";
import ProjectDetails from "../Components/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/projects/:id",
        Component: ProjectDetails,
      },
    ],
  },
]);

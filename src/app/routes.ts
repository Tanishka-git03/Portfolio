import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "projects/:id", Component: ProjectDetail },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

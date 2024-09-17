import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DetailsPage } from "../pages/DetailsPage";

const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "details",
        element: <DetailsPage />,
      },
    ],
  },
];

export const AppRouter = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, SingleMovie, ErrorPage } from "./pages";
import { RootLayout } from "./layout";
import { Component } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies/:movieId", element: <SingleMovie /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default class AppClasses extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

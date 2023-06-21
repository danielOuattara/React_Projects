import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Homepage</h2>,
  },
  {
    path: "/about",
    element: <h2>about page</h2>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

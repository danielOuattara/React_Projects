import MovieContextProvider from "./context/MovieContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, SingleMovie, ErrorPage } from "./pages";
import { RootLayout } from "./layout";

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

export default function AppUseContextHookFunction() {
  return (
    <MovieContextProvider>
      <RouterProvider router={router} />
    </MovieContextProvider>
  );
}

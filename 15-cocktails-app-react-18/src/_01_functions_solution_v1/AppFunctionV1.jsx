import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Error, Home, SingleCocktail } from "./pages";
import { RootLayout } from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "cocktail/:cocktailId", element: <SingleCocktail /> },
    ],
  },
  { path: "*", element: <Error /> },
]);

export default function AppFunctionV1() {
  return (
    <>
      <p className="title">function solution version 1</p>
      <RouterProvider router={router} />;
    </>
  );
}

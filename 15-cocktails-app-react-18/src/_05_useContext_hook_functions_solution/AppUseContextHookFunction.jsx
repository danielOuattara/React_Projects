import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { About, Error, Home, SingleCocktail } from "./pages";
import { AppContextProvider } from "./context/AppContext";
import { RootLayout } from "./layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
      ],
    },
    { path: "*", element: <Error /> },
  ]);
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

export default App;

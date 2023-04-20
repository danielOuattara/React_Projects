import { GitHubContextProvider } from "./context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Dashboard,
  Login,
  ErrorPage,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
import { RootLayout } from "./layout";
import * as serviceWorker from "./../serviceWorker";
import { useGitHubContext } from "./context";
import { Auth0Provider } from "@auth0/auth0-react";
import {} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "login", element: <Login /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default function AppUseContextHookFunction() {
  return (
    <GitHubContextProvider>
      <RouterProvider router={router} />
    </GitHubContextProvider>
  );
}

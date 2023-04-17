/*  using react-router-dom v6.10 in this solution version
----------------------------------------------------------*/

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { HomePage, SingleFollowerDetailsPage } from "./pages";
import { singleFollowerLoader } from "./pages/SingleFollowerDetailsPage";
import { followersLoader } from "./pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, loader: followersLoader },
      {
        path: "/followers/:followerLogin",
        element: <SingleFollowerDetailsPage />,
        loader: singleFollowerLoader,
      },
    ],
  },
]);

export default function AppFunction() {
  return <RouterProvider router={router} />;
}

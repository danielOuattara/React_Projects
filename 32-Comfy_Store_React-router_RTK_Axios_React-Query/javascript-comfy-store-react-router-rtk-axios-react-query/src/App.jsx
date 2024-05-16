import * as Page from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page.HomeLayout />,
    errorElement: <Page.Error />,
    children: [
      { index: true, element: <Page.Landing /> },
      { path: "/products", element: <Page.Products /> },
      { path: "/products/:productId", element: <Page.SingleProduct /> },
      { path: "/cart", element: <Page.Cart /> },
      { path: "/about", element: <Page.About /> },
      { path: "/checkout", element: <Page.Checkout /> },
    ],
  },
  { path: "/register", element: <Page.Register /> },
  { path: "/login", element: <Page.Login /> },
]);
export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

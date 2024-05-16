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
      { path: "/orders", element: <Page.Orders /> },
    ],
  },
  {
    path: "/register",
    element: <Page.Register />,
    errorElement: <Page.Error />,
  },
  {
    path: "/register",
    element: <Page.Register />,
    errorElement: <Page.Error />,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

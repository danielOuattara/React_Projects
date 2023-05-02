import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  CartContextProvider,
  FilterContextProvider,
  ProductsContextProvider,
  UserContextProvider,
} from "./context";

import { Auth0Provider } from "@auth0/auth0-react";

import { Navbar, Sidebar, Footer } from "./components";
import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  ProductsPage,
  SingleProductPage,
} from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/products/:productId", element: <SingleProductPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "*", element: <ErrorPage /> },
]);

export default function AppUseReducerUseContextHooksFunctions() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

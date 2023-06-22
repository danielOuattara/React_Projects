import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CartContextProvider,
  FilterContextProvider,
  ProductsContextProvider,
  UIContextProvider,
  UserContextProvider,
} from "./context";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  AboutPage,
  AuthWrapperPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  ProductsPage,
  SingleProductPage,
} from "./pages";

import { RootLayout, PrivateRouteLayout } from "./layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <SingleProductPage /> },
      // { path: "checkout", element: <CheckoutPage /> },
      {
        path: "checkout",
        element: <PrivateRouteLayout />,
        children: [{ index: true, element: <CheckoutPage /> }],
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default function AppUseReducerUseContextHooksFunctions() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin }}
      cacheLocation="localstorage"
    >
      <p className="title">useReducer + useContext solution</p>
      <AuthWrapperPage>
        <UserContextProvider>
          <UIContextProvider>
            <ProductsContextProvider>
              <FilterContextProvider>
                <CartContextProvider>
                  <RouterProvider router={router} />
                </CartContextProvider>
              </FilterContextProvider>
            </ProductsContextProvider>
          </UIContextProvider>
        </UserContextProvider>
      </AuthWrapperPage>
    </Auth0Provider>
  );
}

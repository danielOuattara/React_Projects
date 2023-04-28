import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CartContextProvider,
  FilterContextProvider,
  ProductsContextProvider,
  UserContextProvider,
} from "./context";
import { Auth0Provider } from "@auth0/auth0-react";
import { Navbar, Sidebar, Footer } from "./components";

// import { Navbar, Sidebar, Footer } from './components'
export default function AppUseReducerUseContextHooksFunctions() {
  return <h4>comfy sloth starter</h4>;
}

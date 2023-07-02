import { DashboardPage, ErrorPage, LandingPage, RegisterPage } from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { RootLayout } from "./layout";

import { Provider } from "react-redux";
import store from "./redux/store";

//---------------------------------------------------

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index={true} element={<DashboardPage />} />
      <Route path="landing" element={<LandingPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

export default function AppFunctionReduxToolkit() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

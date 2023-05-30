import { DashboardPage, ErrorPage, LandingPage, RegisterPage } from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { RootLayout } from "./layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<DashboardPage />} />
      <Route index path="landing" element={<LandingPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

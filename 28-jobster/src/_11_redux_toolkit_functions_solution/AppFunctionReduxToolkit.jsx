import { ErrorPage, LandingPage, RegisterPage } from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import { SharedLayout } from "./layout";
import { AddJob, AllJobs, Profile, Stats } from "./pages/dashboard";

//---------------------------------------------------

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Stats />} />
        <Route path="all-jobs" element={<AllJobs />} />
        <Route path="add-job" element={<AddJob />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="landing" element={<LandingPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage />} />
    </>,
  ),
);

export default function AppFunctionReduxToolkit() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

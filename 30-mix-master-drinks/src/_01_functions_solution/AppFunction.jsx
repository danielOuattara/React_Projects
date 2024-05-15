import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AboutPage,
  ErrorPage,
  HomePage,
  NewsLetterPage,
  SingleCocktailPage,
  SinglePageError,
} from "./pages";
import { HomeLayout } from "./layout";
import { loader as homePageLoader } from "./pages/HomePage";
import { loader as homeLayoutLoader } from "./layout/HomeLayout";
import { loader as singleCocktailLoader } from "./pages/SingleCocktailPage";
import { action as newsLetterAction } from "./pages/NewsLetterPage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes in milliseconds
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    loader: homeLayoutLoader,
    id: "home-layout",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homePageLoader(queryClient), // loader will be invoker right away
        errorElement: <SinglePageError />,
      },
      {
        path: "cocktail/:cocktailId",
        element: <SingleCocktailPage />,
        loader: singleCocktailLoader(queryClient), // loader will be invoker right away
        errorElement: <SinglePageError />,
      },
      {
        path: "newsletter",
        element: <NewsLetterPage />,
        id: "newsletter",
        action: newsLetterAction,
      },
      { path: "about", element: <AboutPage />, id: "about" },
    ],
  },
]);

export default function AppFunction() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

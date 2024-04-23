import { Gallery, SearchForm, ThemeToggle } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchContextProvider, ThemeContextProvider } from "./context";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function AppUseContextHookFunction() {
  const queryClient = new QueryClient();

  return (
    <ThemeContextProvider>
      <SearchContextProvider>
        <QueryClientProvider client={queryClient}>
          <br /> <hr /> <br />
          <p style={{ textAlign: "center" }}>
            useContext hook function solution
          </p>
          <main>
            <ThemeToggle />
            <SearchForm />
            <Gallery />
          </main>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </SearchContextProvider>
    </ThemeContextProvider>
  );
}

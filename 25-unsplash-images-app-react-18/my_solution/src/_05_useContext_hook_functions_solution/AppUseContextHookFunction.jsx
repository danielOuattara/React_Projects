import { Gallery, SearchForm, ThemeToggle } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppContextProvider from "./context/AppContext";

export default function AppUseContextHookFunction() {
  const queryClient = new QueryClient();

  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <br /> <hr /> <br />
        <p style={{ textAlign: "center" }}>useContext hook function solution</p>
        <main>
          <ThemeToggle />
          <SearchForm />
          <Gallery />
        </main>
      </QueryClientProvider>
    </AppContextProvider>
  );
}

import { Gallery, SearchForm, ThemeToggle } from "./components";
import AppContextProvider from "./context/AppContext";

export default function AppUseContextHookFunction() {
  return (
    <AppContextProvider>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>useContext hook function solution</p>
      <main>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
      </main>
    </AppContextProvider>
  );
}

import { CocktailList, SearchForm } from "../components";
import useFetchCocktails from "../customHooks/useFetchCocktails";

/* NOTE:  In this version, <useFetchCocktails/> directly makes all request and 
sends back state & searchCocktails to <Home/> which sends them to all consuming
components  */

export default function Home() {
  const { searchCocktail, state } = useFetchCocktails();

  return (
    <main>
      <SearchForm searchCocktail={searchCocktail} />
      <CocktailList isLoading={state.isLoading} cocktails={state.cocktails} />
    </main>
  );
}

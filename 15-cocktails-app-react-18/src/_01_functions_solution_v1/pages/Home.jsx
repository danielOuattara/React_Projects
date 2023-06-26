import { CocktailList, SearchForm } from "../components";
import { useState, useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

/* NOTE:  In this version, <Home/> directly makes all request and 
sends back props to all consuming component  */

export default function Home() {
  const [state, setState] = useState({
    isLoading: true,
    searchTerm: "",
    cocktails: [],
    singleCocktail: {},
  });

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch(`${url}${state.searchTerm}`);
        const data = await response.json();

        if (data.drinks) {
          const fetchedCocktails = data.drinks.map((item) => {
            return {
              id: item.idDrink,
              name: item.strDrink,
              image: item.strDrinkThumb,
              info: item.strAlcoholic,
              glass: item.strGlass,
            };
          });
          setState((prevState) => ({
            ...prevState,
            cocktails: fetchedCocktails,
            isLoading: false,
          }));
        } else {
          setState((prevState) => ({
            ...prevState,
            cocktails: [],
            isLoading: false,
          }));
        }
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      }
    };

    fetchCocktails();
  }, [state.searchTerm]);

  const searchCocktail = (valueArg) => {
    setState((prevState) => ({
      ...prevState,
      searchTerm: valueArg,
    }));
  };
  return (
    <main>
      <SearchForm searchCocktail={searchCocktail} />
      <CocktailList isLoading={state.isLoading} cocktails={state.cocktails} />
    </main>
  );
}

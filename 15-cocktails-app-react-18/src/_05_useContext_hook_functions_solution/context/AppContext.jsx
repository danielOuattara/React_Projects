import { useState, useContext, useEffect, createContext } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
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
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
              item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setState((prevState) => ({
            ...prevState,
            cocktails: fetchedCocktails,
            loading: false,
          }));
        } else {
          setState((prevState) => ({
            ...prevState,
            cocktails: [],
          }));
        }
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      }
    };

    fetchCocktails();
  }, [state.searchTerm]);

  return (
    <AppContext.Provider value={{ ...state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppContextProvider };

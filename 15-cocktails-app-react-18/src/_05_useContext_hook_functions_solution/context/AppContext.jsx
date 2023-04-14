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
            loading: false,
          }));
        } else {
          setState((prevState) => ({
            ...prevState,
            cocktails: [],
            loading: false,
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

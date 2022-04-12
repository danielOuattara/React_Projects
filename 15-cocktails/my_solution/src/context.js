import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [singleCocktail, setSingleCocktail] = useState({});

  const fetchDrinks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();

      const { drinks } = data;
      console.log(drinks);

      if (drinks) {
        const newCocktails = drinks.map((item) => {
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
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchTerm,
        setSingleCocktail,
        singleCocktail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };


// =============================================================================

/* no http request to retrieve informations about a cocktail: all information 
is from the initial first request in context; we just filter result for a specific
cocktail.*/


// import React, { useState, useContext, useEffect } from "react";
// import { useCallback } from "react";

// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [cocktails, setCocktails] = useState([]);
//   const [singleCocktail, setSingleCocktail] = useState({});

//   const fetchDrinks = useCallback(async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${url}${searchTerm}`);
//       const data = await response.json();

//       const { drinks } = data;
//       console.log(drinks);

//       if (drinks) {
//         const newCocktails = drinks.map((item) => {
//           const {
//             idDrink,
//             strDrink,
//             strDrinkThumb,
//             strAlcoholic,
//             strGlass,
//             strInstructions,
//             strIngredient1,
//             strIngredient2,
//             strIngredient3,
//             strIngredient4,
//             strIngredient5,
//           } = item;

//           return {
//             id: idDrink,
//             name: strDrink,
//             image: strDrinkThumb,
//             info: strAlcoholic,
//             glass: strGlass,
//             instructions: strInstructions,
//             strIngredient1,
//             strIngredient2,
//             strIngredient3,
//             strIngredient4,
//             strIngredient5,
//           };
//         });
//         setCocktails(newCocktails);
//       } else {
//         setCocktails([]);
//       }
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   }, [searchTerm]);

//   useEffect(() => {
//     fetchDrinks();
//   }, [searchTerm, fetchDrinks]);

//   return (
//     <AppContext.Provider
//       value={{
//         loading,
//         cocktails,
//         setSearchTerm,
//         setSingleCocktail,
//         singleCocktail,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };
// // make sure use
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider };

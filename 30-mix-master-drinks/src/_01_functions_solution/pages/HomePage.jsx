// import { Link, useLoaderData } from "react-router-dom";
// import axios from "axios";
// import { CocktailsList, SearchForm } from "../components";

// const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

//--------------------------------------------------
// export async function loader({ request }) {
//   // const url = new URL(request.url);
//   // const searchTerm = url.searchParams.get("search") || "";

//   const searchTerm = request.url.split("=")[1] || "";

//   const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
//   return { drinks: response.data.drinks, searchTerm };
// }

//--------------------------------------------------
// export default function HomePage() {
//   const { drinks, searchTerm } = useLoaderData();
//   return (
//     <div>
//       <SearchForm searchTerm={searchTerm} />
//       <CocktailsList drinks={drinks} />
//     </div>
//   );
// }

//======================================================================

// import { Link, useLoaderData } from "react-router-dom";
// import axios from "axios";
// import { CocktailsList, SearchForm } from "../components";
// import { useQuery } from "@tanstack/react-query"; // new !

// const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

// //--------------------------------------------------
// const searchCocktailsQuery = (searchArg) => {
//   return {
//     queryKey: ["search", searchArg || "all"],
//     queryFn: async () => {
//       const response = await axios.get(`${cocktailSearchUrl}${searchArg}`);
//       console.log(response.data.drinks);
//       return response.data.drinks;
//     },
//   };
// };

// //--------------------------------------------------
// export async function loader({ request }) {
//   const searchTerm = request.url.split("=")[1] || "";
//   return { searchTerm };
// }

// //--------------------------------------------------
// export default function HomePage() {
//   const { searchTerm } = useLoaderData();
//   const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

//   return (
//     <div>
//       <SearchForm searchTerm={searchTerm} />
//       <CocktailsList drinks={drinks} />
//     </div>
//   );
// }

//======================================================================

import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { CocktailsList, SearchForm } from "../components";
import { useQuery } from "@tanstack/react-query"; // new !

const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

//--------------------------------------------------
const searchCocktailsQuery = (searchArg) => {
  return {
    queryKey: ["search", searchArg || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchArg}`);
      return response.data.drinks;
    },
  };
};

//--------------------------------------------------
export function loader(queryClient) {
  return async function ({ request }) {
    const searchTerm = request.url.split("=")[1] || "";
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };
}

//--------------------------------------------------
export default function HomePage() {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <CocktailsList drinks={drinks} />
    </div>
  );
}

/* import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { SingleCocktailPageWrapper } from "./../../assets/styles";
const singleCocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

//---------------

export async function loader({ params, request, context }) {
  const response = await axios.get(`${singleCocktailUrl}${params.cocktailId}`);
  return { cocktailId: params.cocktailId, data: response.data };
}

//---------------

export default function SingleCocktailPage() {
  const { cocktailId, data } = useLoaderData();

  if (!data) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null,
    )
    .map((key) => singleDrink[key]);

  return (
    <SingleCocktailPageWrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>

      <div className="drink">
        <img src={image} alt={name} className="img"></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item} {index < validIngredients.length - 1 ? "," : "."}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span> {instructions}
          </p>
        </div>
      </div>
    </SingleCocktailPageWrapper>
  );
} */

//==================================================================

import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { SingleCocktailPageWrapper } from "./../../assets/styles";
import { useQuery } from "@tanstack/react-query"; // new !

const singleCocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

//---------------
const searchSingleCocktailQuery = (cocktailId) => {
  return {
    queryKey: ["cocktailId", cocktailId],
    queryFn: async () => {
      const response = await axios.get(`${singleCocktailUrl}${cocktailId}`);
      return response.data;
    },
  };
};

//---------------
export function loader(queryClient) {
  return async function ({ params }) {
    await queryClient.ensureQueryData(
      searchSingleCocktailQuery(params.cocktailId),
    );
    return { cocktailId: params.cocktailId };
  };
}
//---------------
export default function SingleCocktailPage() {
  const { cocktailId } = useLoaderData();
  const { data } = useQuery(searchSingleCocktailQuery(cocktailId));

  if (!data) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null,
    )
    .map((key) => singleDrink[key]);

  return (
    <SingleCocktailPageWrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>

      <div className="drink">
        <img src={image} alt={name} className="img"></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item} {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span> {instructions}
          </p>
        </div>
      </div>
    </SingleCocktailPageWrapper>
  );
}

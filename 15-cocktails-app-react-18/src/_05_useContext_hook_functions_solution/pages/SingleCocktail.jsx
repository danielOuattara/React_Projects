import { useEffect, useState } from "react";
import { Loading } from "./../components";
import { useParams, Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export default function SingleCocktail() {
  const params = useParams();

  const [state, setState] = useState({
    cocktail: null,
    loading: true,
  });

  useEffect(() => {
    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${params.cocktailId}`);
        const data = await response.json();

        if (data.drinks) {
          const fetchedCocktail = {
            name: data.drinks[0].strDrink,
            image: data.drinks[0].strDrinkThumb,
            info: data.drinks[0].strAlcoholic,
            category: data.drinks[0].strCategory,
            glass: data.drinks[0].strGlass,
            instructions: data.drinks[0].strInstructions,
            ingredients: [
              data.drinks[0].strIngredient1,
              data.drinks[0].strIngredient2,
              data.drinks[0].strIngredient3,
              data.drinks[0].strIngredient4,
              data.drinks[0].strIngredient5,
            ],
          };

          setState((prevState) => ({
            ...prevState,
            loading: false,
            cocktail: fetchedCocktail,
          }));
        }
      } catch (error) {}
    };

    getCocktail();
  }, [params.cocktailId]);

  if (state.loading) {
    return <Loading />;
  }

  if (!state.cocktail) {
    return <h2 className="section-title"> no cocktail to display</h2>;
  }

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{state.cocktail.name}</h2>
      <div className="drink">
        <img src={state.cocktail?.image} alt={state.cocktail.name} />
        <div className="drink-info">
          <p>
            <span className="drink-data"> name: </span> {state.cocktail.name}
          </p>
          <p>
            <span className="drink-data"> category: </span>{" "}
            {state.cocktail.category}
          </p>
          <p>
            <span className="drink-data"> info: </span> {state.cocktail.info}
          </p>
          <p>
            <span className="drink-data"> glass: </span> {state.cocktail.glass}
          </p>
          <p>
            <span className="drink-data"> instructions: </span>{" "}
            {state.cocktail.instructions}
          </p>
          <p>
            <span className="drink-data"> ingredients: </span>
            {state.cocktail.ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

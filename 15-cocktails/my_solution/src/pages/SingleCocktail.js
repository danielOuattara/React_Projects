import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const res = await fetch(`${url}${id}`);
        const data = await res.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className="section-title"> no cocktail to display</h2>;
  }

  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data"> name: </span> {name}
          </p>
          <p>
            <span className="drink-data"> category: </span> {category}
          </p>
          <p>
            <span className="drink-data"> info: </span> {info}
          </p>
          <p>
            <span className="drink-data"> glass: </span> {glass}
          </p>
          <p>
            <span className="drink-data"> instructions: </span> {instructions}
          </p>
          <p>
            <span className="drink-data"> ingredients: </span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;

// =========================================================================

/* no http request to retrieve informations about a cocktail: all information 
is from the initial first request in context; we just filter result for a specific
cocktail.

Note: Single cocktail data is not persistant: it doesn't support page reload, 
      data is lost, maybe use localStorage to keep them  */

// import React from "react";
// import { Link } from "react-router-dom";
// import { useGlobalContext } from "../context";

// const SingleCocktail = () => {
//   const { singleCocktail } = useGlobalContext();

//   const {
//     name,
//     image,
//     info,
//     category,
//     glass,
//     instructions,
//     strIngredient1,
//     strIngredient2,
//     strIngredient3,
//     strIngredient4,
//     strIngredient5,
//   } = singleCocktail;

//   const ingredients = [
//     strIngredient1,
//     strIngredient2,
//     strIngredient3,
//     strIngredient4,
//     strIngredient5,
//   ];

//   if (!singleCocktail) {
//     return <h2 className="section-title"> no cocktail to display</h2>;
//   }

//   return (
//     <section className="section cocktail-section">
//       <Link to="/" className="btn btn-primary">
//         back home
//       </Link>
//       <h2 className="section-title">{name}</h2>
//       <div className="drink">
//         <img src={image} alt={name} />
//         <div className="drink-info">
//           <p>
//             <span className="drink-data"> name: </span> {name}
//           </p>
//           <p>
//             <span className="drink-data"> category: </span> {category}
//           </p>
//           <p>
//             <span className="drink-data"> info: </span> {info}
//           </p>
//           <p>
//             <span className="drink-data"> glass: </span> {glass}
//           </p>
//           <p>
//             <span className="drink-data"> instructions: </span> {instructions}
//           </p>
//           <p>
//             <span className="drink-data"> ingredients: </span>
//             {ingredients.map((item, index) => {
//               return item ? <span key={index}>{item}</span> : null;
//             })}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SingleCocktail;

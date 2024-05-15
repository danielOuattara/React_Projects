import { CocktailsListWrapper } from "../../assets/styles";
import { CocktailCard } from "./index";

export default function CocktailsList({ drinks }) {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>No cocktails found</h4>;
  }

  const formattedDrinks = drinks.map((item) => {
    return {
      id: item.idDrink,
      name: item.strDrink,
      image: item.strDrinkThumb,
      info: item.strAlcoholic,
      glass: item.strGlass,
    };
  });

  return (
    <CocktailsListWrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </CocktailsListWrapper>
  );
}

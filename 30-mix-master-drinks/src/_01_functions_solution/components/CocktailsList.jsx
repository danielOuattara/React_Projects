import { CocktailsListWrapper } from "../../assets/styles";
import { CocktailCard } from "./index";

export default function CocktailsList(props) {
  if (!props.drinks) {
    return <h4 style={{ textAlign: "center" }}>No cocktails found</h4>;
  }

  const formattedDrinks = props.drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
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

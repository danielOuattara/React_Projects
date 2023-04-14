import { Loading, Cocktail } from "./";
import { useGlobalContext } from "./../context/AppContext";

export default function CocktailList() {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length === 0) {
    return <h2 className="section-title"> No cocktail matches your search </h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails list </h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

import { Loading, Cocktail } from "./";

export default function CocktailList(props) {
  if (props.isLoading) {
    return <Loading />;
  }

  if (props.cocktails.length === 0) {
    return <h2 className="section-title"> No cocktail matches your search </h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails list </h2>
      <div className="cocktails-center">
        {props.cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

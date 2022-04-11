import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if(cocktails.length === 0) {
    return  <h2 className="section-title"> No cocktail matches your search </h2>
  };

  return (
    <section className="section">
      <h2 className="section-title">cocktail list component</h2>
      <div className="cocktails-center">
        {cocktails.map(item => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  );
};

export default CocktailList;

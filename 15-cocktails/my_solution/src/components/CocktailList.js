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
    return  <h2 className="section-title"> No cocktail match your search </h2>
  };

  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  );
};

export default CocktailList;

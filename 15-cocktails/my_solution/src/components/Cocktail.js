import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Cocktail = ({ image, name, id, info, glass }) => {
  const { setSingleCocktail, cocktails } = useGlobalContext();

  const findSingleCocktail = (id) => {
    return setSingleCocktail(cocktails.find((item) => item.id === id));
  };
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/coktail/${id}`} onClick={()=>findSingleCocktail(id)} className="btn btn-primary">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;

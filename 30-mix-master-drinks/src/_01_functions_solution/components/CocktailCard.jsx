import { Link, useOutletContext } from "react-router-dom";
import { CocktailCardWrapper } from "../../assets/styles";

export default function CocktailCard({ image, name, id, info, glass }) {
  /* for info purpose only, check the docs for more */
  const context = useOutletContext();
  console.log("context = ", context);
  return (
    <CocktailCardWrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>

        <Link to={`/cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </CocktailCardWrapper>
  );
}

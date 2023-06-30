import { Link, useOutletContext } from "react-router-dom";
import { CocktailCardWrapper } from "../../assets/styles";

export default function CocktailCard({ image, name, id, info, glass }) {
  const context = useOutletContext(); // for info purpose only, check the docs for more
  // console.log("context = ", context); // for info purpose only, check the docs for more
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

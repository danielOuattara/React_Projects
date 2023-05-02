import { Link } from "react-router-dom";
import { PageHeroWrapper } from "./styleWrappers";

export default function PageHero(props) {
  return (
    <PageHeroWrapper>
      <div className="section-center">
        <h3>
          <Link to={"/"}>Home</Link> / {props.title}
        </h3>
      </div>
    </PageHeroWrapper>
  );
}

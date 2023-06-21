import { Link } from "react-router-dom";
import heroBcg from "./../../assets/hero-bcg.jpeg";
import heroBcg2 from "./../../assets/hero-bcg-2.jpeg";
import { HeroWrapper } from "./styleWrappers";

export default function Hero() {
  return (
    <HeroWrapper className="section-center">
      <article className="content">
        <h1>
          design your <br /> comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          assumenda rerum at asperiores inventore animi soluta ipsa accusantium
          sit optio maxime, odit vel voluptate corrupti corporis deleniti
          voluptatibus, veritatis doloribus beatae praesentium. Dolor, hic? Est
          in nam fugiat blanditiis dolore! Placeat cupiditate dolore iusto
          deleniti culpa sapiente! Aliquam, atque incidunt?
        </p>
        <Link to="products" className="btn btn-hero">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </HeroWrapper>
  );
}

import main from "./../../assets/images/main-job.svg";
import { Logo } from "../components";
import { Link } from "react-router-dom";
import { LandingPageWrapper } from "./../../assets/styles";

export default function LandingPage() {
  return (
    <LandingPageWrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className={`container page`}>
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Suscipit, maxime? Nulla voluptatum distinctio sequi facere
              veritatis excepturi illo aperiam. Dolorem et voluptas ab rerum
              architecto harum voluptatum numquam sapiente ut.
            </p>
            <Link className="btn btn-hero" to="/register">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="group of co-workers" className="img main-img" />
        </div>
      </main>
    </LandingPageWrapper>
  );
}

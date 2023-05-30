import logo from "./../assets/images/logo.svg";
import main from "./../assets/images/main-job.svg";
import styles from "./LandingPage.module.css";
import { Logo } from "../components";

export default function LandingPage() {
  return (
    <main>
      <nav>
        <Logo />
      </nav>
      <div className={`container ${styles.page}`}>
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit,
            maxime? Nulla voluptatum distinctio sequi facere veritatis excepturi
            illo aperiam. Dolorem et voluptas ab rerum architecto harum
            voluptatum numquam sapiente ut.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img
          src={main}
          alt="group of co-workers"
          className={`img ${styles["main-img"]}`}
        />
      </div>
    </main>
  );
}

import notFound from "./../assets/images/not-found.svg";
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export default function Error() {
  return (
    <main className={styles.main}>
      <div>
        <img className={styles.img} src={notFound} alt="not found" />
        <h1>404</h1>
        <h3 className={styles.h3}>Ohh! Page Not Found </h3>

        <p className={styles.p}>Cannot find the page you're looking for</p>

        <Link to="/" className={styles.a}>
          {" "}
          go back home
        </Link>
      </div>
    </main>
  );
}

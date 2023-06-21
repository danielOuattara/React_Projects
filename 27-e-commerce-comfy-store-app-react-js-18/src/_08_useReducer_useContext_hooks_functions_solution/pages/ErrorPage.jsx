import { Link } from "react-router-dom";
import { ErrorPageWrapper } from "./styleWrappers";

export default function ErrorPage() {
  return (
    <ErrorPageWrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3> Sorry, the page you are trying to reach cannot be found</h3>
        <Link to={"/"} className="btn">
          back to home
        </Link>
      </section>
    </ErrorPageWrapper>
  );
}

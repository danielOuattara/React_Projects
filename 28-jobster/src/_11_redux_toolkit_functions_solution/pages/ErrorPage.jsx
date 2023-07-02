import notFound from "./../../assets/images/not-found.svg";
import { Link } from "react-router-dom";
import { ErrorPageWrapper } from "./../../assets/styles/index";
export default function Error() {
  return (
    <ErrorPageWrapper className="full-page">
      <main>
        <div>
          <img src={notFound} alt="not found" />
          <h1>404</h1>
          <h3>Ohh! Page Not Found </h3>
          <p>Cannot find the page you're looking for</p>
          <Link to="/"> go back home</Link>
        </div>
      </main>
    </ErrorPageWrapper>
  );
}

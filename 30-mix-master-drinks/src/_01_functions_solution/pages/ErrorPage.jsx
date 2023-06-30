import { ErrorPageWrapper } from "../../assets/styles";
import { Link, useRouteError } from "react-router-dom";
import img from "./../../assets/not-found.svg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (error.status === 404) {
    return (
      <ErrorPageWrapper>
        <div>
          <img src={img} alt="not found" />
          <h1>We are Sorry ! </h1>
          <h3>We can't seem to find the page you're looking for</h3>
          <Link to="/">back home</Link>
        </div>
      </ErrorPageWrapper>
    );
  }

  return (
    <ErrorPageWrapper>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
    </ErrorPageWrapper>
  );
}

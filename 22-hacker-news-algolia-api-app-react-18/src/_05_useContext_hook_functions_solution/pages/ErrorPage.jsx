import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <h1> Error: page Not Found</h1>
      <h2>404</h2>

      <Link to="/">Go Back To Home</Link>
    </>
  );
}

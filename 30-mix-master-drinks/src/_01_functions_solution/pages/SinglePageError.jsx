import { useRouteError } from "react-router-dom";

export default function SinglePageError() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      {error.code && <h2>{error.code}</h2>}
      {error.msg && <h2>{error.msg}</h2>}
      <h2>{error.message}</h2>
    </>
  );
}

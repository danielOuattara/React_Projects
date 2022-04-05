import React, { useContext} from "react";
import { ToursContext } from "./../context/ToursContext";

function Error() {
  const { errorMessage } = useContext(ToursContext);
  return (
    <main>
      <div className="title">
        <h2>{errorMessage}</h2>
      </div>
    </main>
  );
}

export default Error;

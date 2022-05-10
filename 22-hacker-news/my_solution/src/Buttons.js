import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, nbPages, handlePages } = useGlobalContext();
  console.log("page = ", page);
  console.log("nbPages = ", nbPages);

  return (
    <section className="btn-container">
      <button className="button" onClick={() => handlePages(-1)}>
        &lt; Prev
      </button>
      <p>
        {page + 1} / {nbPages}
      </p>
      <button className="button" onClick={() => handlePages(+1)}>
        Next &gt;
      </button>
      :
    </section>
  );
};

export default Buttons;

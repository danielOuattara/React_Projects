import React from "react";
import Reviewfunction from "./ReviewFunction";

function AppFunction() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2> our reviews</h2>
          <div className="underline"></div>
        </div>
        <Reviewfunction />
      </section>
    </main>
  );
}

export default AppFunction;

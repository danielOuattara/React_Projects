import React from "react";
import ReviewFunction from "./ReviewFunction";

function AppFunction() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2> our reviews</h2>
          <h4>functional component</h4>
          <div className="underline"></div>
        </div>
        <ReviewFunction />
      </section>
    </main>
  );
}

export default AppFunction;
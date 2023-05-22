import ReviewFunction from "./ReviewFunction";

function AppFunction() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2> our reviews</h2>
          <p>functional component</p>
          <div className="underline"></div>
        </div>
        <ReviewFunction />
      </section>
    </main>
  );
}

export default AppFunction;

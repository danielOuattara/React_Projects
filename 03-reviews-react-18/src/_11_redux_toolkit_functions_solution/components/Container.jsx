import Reviews from "./Reviews";

export default function Container() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2> our reviews</h2>
          <p>redux toolkit + functions solution</p>
          <div className="underline"></div>
        </div>
        <Reviews />
      </section>
    </main>
  );
}

import Reviews from "./Reviews";

export default function Container() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2> our reviews</h2>
          <p>redux + functions solution version 1</p>
          <div className="underline"></div>
        </div>
        <Reviews />
      </section>
    </main>
  );
}

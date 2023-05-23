import Reviews from "./Reviews";

export default function Container() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2> our reviews</h2>
          <p>
            useReducer + custom hooks + context API functions solution version 2
          </p>
          <div className="underline"></div>
        </div>
        <Reviews />
      </section>
    </main>
  );
}

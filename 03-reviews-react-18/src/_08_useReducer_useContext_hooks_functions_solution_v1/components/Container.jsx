import Reviews from "./Reviews";

export default function Container() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2> our reviews</h2>
          <p>
            <p>
              useReducer + custom hooks + useContext functions solution version
              1
            </p>
          </p>
          <div className="underline"></div>
        </div>
        <Reviews />
      </section>
    </main>
  );
}

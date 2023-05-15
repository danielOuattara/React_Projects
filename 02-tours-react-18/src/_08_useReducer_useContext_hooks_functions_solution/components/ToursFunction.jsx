import { useToursContext } from "./../context/ToursContext";
import TourItemFunction from "./TourItemFunction";

export default function Tours() {
  const { tours } = useToursContext();
  return (
    <main>
      <section>
        <div className="title">
          <p>useReducer + custom hooks + useContext functions solution</p>
          <h2>our tours</h2>
          <div className="underline"></div>
          <div>
            {tours.map((item) => {
              return <TourItemFunction key={item.id} {...item} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

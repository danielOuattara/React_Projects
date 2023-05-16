import TourItemFunction from "./TourItemFunction";
import { useSelector } from "react-redux";

export default function Tours() {
  const { tours } = useSelector((state) => state.tours);

  return (
    <main>
      <section>
        <div className="title">
          <p>react redux toolkit + functions solution</p>
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

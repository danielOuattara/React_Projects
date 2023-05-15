import { useToursContext } from "./../context/ToursContext";
import TourItemFunction from "./TourItem";

const Tours = () => {
  const { tours } = useToursContext();
  return (
    <main>
      <section>
        <div className="title">
          <p>context API + custom hooks functions solution (version 2) </p>
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
};

export default Tours;

import { ToursContext } from "./../context/ToursContext";
import TourItemFunction from "./TourItemFunction";

export default function Tours() {
  return (
    <ToursContext.Consumer>
      {(context) => {
        return (
          <main>
            <section>
              <div className="title">
                <p>
                  useReducer + custom hooks + context API functions solution
                </p>
                <h2>our tours</h2>
                <div className="underline"></div>
                <div>
                  {context.tours.map((item) => {
                    return <TourItemFunction key={item.id} {...item} />;
                  })}
                </div>
              </div>
            </section>
          </main>
        );
      }}
    </ToursContext.Consumer>
  );
}

import React from "react";
import { ToursContext } from "./../context/ToursContext";
import TourItemFunction from "./TourItem";

const Tours = () => {

  const {tours} = React.useContext(ToursContext)
  return (
    <main>
      <section>
        <div className="title">
          <h2>ours tours</h2>
          <div className="underline"></div>
          <div>
            {tours.map((item) => {
              return (
                <TourItemFunction
                  key={item.id}
                  {...item}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tours;

import TourItemFunction from "./TourItemFunction";

const Tours = (props) => {
  return (
    <main>
      <section>
        <div className="title">
          <p>useReducer + custom hooks functions solution (version 2)</p>
          <h2>our tours</h2>
          <div className="underline"></div>
          <div>
            {props.tours.map((item) => (
              <TourItemFunction
                key={item.id}
                {...item}
                removeTourItem={props.removeTourItem}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tours;

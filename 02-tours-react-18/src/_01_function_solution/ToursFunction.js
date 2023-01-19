import TourItemFunction from "./TourItemFunction";

const Tours = ({ tours, removeTourItem }) => {
  return (
    <main>
      <section>
        <div className="title">
          <h2>ours tours</h2>
          <div className="underline"></div>
          <div>
            {tours.map((item) => (
              <TourItemFunction
                key={item.id}
                {...item}
                removeTourItem={removeTourItem}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tours;

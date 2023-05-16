import { useToursContext } from "./../context/ToursContext";

function ResetTours() {
  const { fetchTours } = useToursContext();

  return (
    <main>
      <div className="title">
        <p>context API + custom hooks functions solution (version 2) </p>
        <h2>no tour left</h2>
        <button className="btn" onClick={() => fetchTours()}>
          refresh
        </button>
      </div>
    </main>
  );
}

export default ResetTours;

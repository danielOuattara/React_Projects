import { useToursContext } from "./../context/ToursContext";

function ResetTours() {
  const { fetchTours } = useToursContext();
  return (
    <main>
      <div className="title">
        <p>useReducer + custom hooks + useContext functions solution</p>
        <h2>no tour left</h2>
        <button className="btn" onClick={() => fetchTours()}>
          refresh
        </button>
      </div>
    </main>
  );
}

export default ResetTours;

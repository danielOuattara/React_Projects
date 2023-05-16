import { useDispatch } from "react-redux";
import { fetchTours } from "../store/tours/tours-async-actions";

export default function ResetTours() {
  const dispatchTours = useDispatch();

  return (
    <main>
      <div className="title">
        <p>react redux toolkit + functions solution</p>
        <h2>no tour left</h2>
        <button className="btn" onClick={() => dispatchTours(fetchTours())}>
          refresh
        </button>
      </div>
    </main>
  );
}

import { ToursContext } from "./../context/ToursContext";

function ResetTours() {
  return (
    <ToursContext.Consumer>
      {(context) => {
        return (
          <main>
            <div className="title">
              <p>useReducer + custom hooks + context API functions solution</p>
              <h2>no tour left</h2>
              <button className="btn" onClick={() => context.fetchTours()}>
                refresh
              </button>
            </div>
          </main>
        );
      }}
    </ToursContext.Consumer>
  );
}

export default ResetTours;

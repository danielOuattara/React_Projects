import { ToursContext } from "./../context/ToursContext";

function ResetTours() {
  return (
    <ToursContext.Consumer>
      {(context) => {
        const { fetchTours } = context;
        return (
          <main>
            <div className="title">
              <p>context API + functions solution version 1</p>
              <h2>no tour left</h2>
              <button className="btn" onClick={() => fetchTours()}>
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

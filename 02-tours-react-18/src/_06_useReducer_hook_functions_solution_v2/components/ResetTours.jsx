function ResetTours({ fetchTours }) {
  return (
    <main>
      <div className="title">
        <p>useReducer + custom hooks functions solution (version 2)</p>
        <h2>no tour left</h2>
        <button className="btn" onClick={fetchTours}>
          refresh
        </button>
      </div>
    </main>
  );
}

export default ResetTours;

import React from "react";
import { ToursContext } from "./../context/ToursContext";


function ResetTours() {

  const {fetchTours} = React.useContext(ToursContext)
  
  return (
    <main>
      <div className="title">
        <h2>no tour left</h2>
        <button className="btn" onClick={() => fetchTours()}>
          refresh
        </button>
      </div>
    </main>
  );
}

export default ResetTours;

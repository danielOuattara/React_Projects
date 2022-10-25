import React from "react";

function ResetTours({ fetchTours }) {
  return (
    <main>
      <div className="title">
        <h2>no tour left</h2>
        <button className="btn" onClick={fetchTours}>
          refresh
        </button>
      </div>
    </main>
  );
}

export default ResetTours;

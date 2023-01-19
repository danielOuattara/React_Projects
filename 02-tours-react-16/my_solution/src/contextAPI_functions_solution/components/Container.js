
// using useContext
//-----------------------------------------------------------------

// import React, { useContext } from "react";
// import Error from "./Error";
// import Loading from "./Loading";
// import ResetTours from "./ResetTours";
// import Tours from "./Tours";
// import { ToursContext } from "../context/ToursContext";

// function Container() {
//   const { isError, loading, tours } = useContext(ToursContext);

//   if (isError) {
//     return <Error />;
//   }

//   if (loading) {
//     return <Loading />;
//   }

//   if (tours.length === 0) {
//     return <ResetTours />;
//   }

//   return <Tours />;
// }

// export default Container;


// using ToursContext.Consumer
//-------------------------------------------------------------------

import React from "react";
import Error from "./Error";
import Loading from "./Loading";
import ResetTours from "./ResetTours";
import Tours from "./Tours";
import { ToursContext } from "../context/ToursContext";

function Container() {
  return (
    <ToursContext.Consumer>
      {context => {
        const { isError, loading, tours } = context;
    
        if (isError) {
          return <Error />;
        }
      
        if (loading) {
          return <Loading />;
        }
      
        if (tours.length === 0) {
          return <ResetTours />;
        }
      
        return <Tours />;
      }}
    </ToursContext.Consumer>
  )
}

export default Container;

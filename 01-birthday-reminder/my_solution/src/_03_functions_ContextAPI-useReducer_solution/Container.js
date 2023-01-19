import React from "react";
import ListContextAPI from "./ListFunctionContextAPI";
import { FriendsContext } from "./context/FriendsContext";

function Container() {
  return (
    <FriendsContext.Consumer>
      {(context) => {
        const { people, handleRefresh, setPeople } = context;
        return (
          <main>
            <section className="container">
              <span> function component: contextAPI + useContext</span>
              {people.length > 1 && <h3>{people.length} birthdays today</h3>}
              {(people.length === 1 || people.length === 0) && (
                <h3>{people.length} birthday today</h3>
              )}{" "}
              <ListContextAPI />
              {people.length !== 0 && (
                <button onClick={() => setPeople([])}> Clear all</button>
              )}
              {people.length === 0 && (
                <button onClick={handleRefresh}> Refresh</button>
              )}
            </section>
          </main>
        );
      }}
    </FriendsContext.Consumer>
  );
}

export default Container;

//-----------------------------------------------------------------------------

/* useContext below 
-------------------- */

// import React, { useContext } from "react";
// import ListContextAPI from "./ListFunctionContextAPI";
// import { FriendsContext} from './context/FriendsContext'

// function Container() {
//     const { people, handleRefresh, setPeople } = useContext(FriendsContext)
//   return (
//     <main>
//       <section className="container">
//         <span>contextAPI</span>
//         {people.length > 1 && <h3>{people.length} birthdays today</h3>}
//         {people.length === 1 && <h3>{people.length} birthday today</h3>}
//         <ListContextAPI />
//         {people.length !== 0 && (
//           <button onClick={() => setPeople([])} style={{ marginTop: "50px" }}>
//             {" "}
//             Clear all
//           </button>
//         )}
//         {people.length === 0 && (
//           <button onClick={handleRefresh} style={{ marginTop: "50px" }}>
//             {" "}
//             Refresh
//           </button>
//         )}
//       </section>
//     </main>
//   );
// }

// export default Container;

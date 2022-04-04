/* ---Context.Consumer 
------------------------ */

import React, { useContext } from "react";
import { FriendsContext } from "./context/FriendsContext";

const ListContextAPI = () => {
  const { people, handleRemoveOnePerson } = useContext(FriendsContext);
  return (
    <>
      {people.length > 1 && <h2 style={h2_styled}>friends to contact</h2>}
      {people.length === 1 && <h2 style={h2_styled}>friend to contact</h2>}
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person" style={article_styled}>
            <img src={image} alt={"picture of " + name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button
                style={btn_style}
                onClick={() => handleRemoveOnePerson(id)}
              >
                Event Finished
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ListContextAPI;

//-----------------------------------------------------------------------------

/* useContext below 
-------------------- */

// import { useContext} from 'react';
// import { FriendsContext } from './context/FriendsContext';

// const ListContextAPI = () => {

//   const { people, handleRemoveOnePerson } = useContext(FriendsContext)
//   return (
//     <>
//       {people.length > 1 && <h2 style={h2_styled}>friends to contact</h2>}
//       {people.length === 1 && <h2 style={h2_styled}>friend to contact</h2>}
//       {people.map( person => {
//         const {id, name, age, image} = person;
//         return (
//           <article key={id} className="person" style={article_styled}>
//             <img src={image} alt={'picture of '+ name}/>
//             <div >
//               <h4>{name}</h4>
//               <p>{age} years</p>
//               <button style={btn_style} onClick={() => handleRemoveOnePerson(id)}>Event Finished</button>
//             </div>
//           </article>
//         );
//       })}
//     </>
//   );
// };

// export default ListContextAPI;

const h2_styled = {
  borderBottom: "4px solid grey",
  marginTop: "10px",
  paddingBottom: "20px",
  fontWeight: "600",
};
const article_styled = {
  borderBottom: "2px solid grey",
  marginBottom: "10px",
  paddingBottom: "20px",
};
const btn_style = {};

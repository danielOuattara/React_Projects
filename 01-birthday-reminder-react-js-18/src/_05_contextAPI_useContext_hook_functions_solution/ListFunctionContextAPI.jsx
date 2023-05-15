/* ---Context.Consumer 
------------------------ */

import React, { useContext } from "react";
import { FriendsContext } from "./context/FriendsContext";

const ListContextAPI = () => {
  const { people, handleRemoveOnePerson } = useContext(FriendsContext);
  return (
    <>
      {people.length > 1 && <h2 className="h2_styled">friends to contact</h2>}
      {people.length === 1 && <h2 className="h2_styled">friend to contact</h2>}
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person article_styled">
            <img src={image} alt={"picture of " + name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button
                onClick={() => handleRemoveOnePerson(id)}
                className="btn_styled"
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
//       {people.length > 1 && <h2 className="h2_styled">friends to contact</h2>}
//       {people.length === 1 && <h2 className="h2_styled">friend to contact</h2>}
//       {people.map( person => {
//         const {id, name, age, image} = person;
//         return (
//           <article key={id} className="person article_styled" >
//             <img src={image} alt={'picture of '+ name}/>
//             <div >
//               <h4>{name}</h4>
//               <p>{age} years</p>
//               <button className="btn_styled" onClick={() => handleRemoveOnePerson(id)}>Event Finished</button>
//             </div>
//           </article>
//         );
//       })}
//     </>
//   );
// };

// export default ListContextAPI;

// import React, { useContext } from "react";
// import { FaBars } from "react-icons/fa";
// import { AppContext } from "./context";

// const Home = () => {
// const data = useContext(AppContext)
//   console.log(data);
//   return (
//     <main>
//       <button className="sidebar-toggle">
//         <FaBars />
//       </button>
//       <button className="btn">show modal</button>
//     </main>
//   );
// };

// export default Home;

/* using useGlobalContext 
---------------------------*/
import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { showModal, setShowModal, showSideBar, setShowSideBar } = useGlobalContext();
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => setShowSideBar(!showSideBar)}
      >
        <FaBars />
      </button>
      <button className="btn" onClick={() => setShowModal(!showModal)}>
        show modal
      </button>
    </main>
  );
};

export default Home;

// Classic method

// import { useContext } from "react";
// import { FaBars } from "react-icons/fa";
// import { AppContext } from "./../context/AppContext";

// export default function Home() {
//   const { isModalOpen, setIsModalOpen, isSideBarOpen, setIsSideBarOpen } =
//     useContext(AppContext);

//   return (
//     <main>
//       <button
//         className="sidebar-toggle"
//         onClick={() => setIsSideBarOpen(!isSideBarOpen)}
//       >
//         <FaBars />
//       </button>
//       <button className="btn" onClick={() => setIsModalOpen(!isModalOpen)}>
//         show modal NOW
//       </button>
//     </main>
//   );
// }

//------------------------------------------------------

// John's method

import { FaBars } from "react-icons/fa";
import { useAppContext } from "./../context/AppContext";
export default function Home() {
  const { isModalOpen, setIsModalOpen, isSideBarOpen, setIsSideBarOpen } =
    useAppContext(); //<-- this

  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      >
        <FaBars />
      </button>
      <button className="btn" onClick={() => setIsModalOpen(!isModalOpen)}>
        show modal
      </button>
    </main>
  );
}

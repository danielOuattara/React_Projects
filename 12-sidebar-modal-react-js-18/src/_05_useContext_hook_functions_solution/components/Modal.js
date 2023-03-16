// import { useContext } from "react";
// import { AppContext } from "./../context/AppContext";
// import { FaTimes } from "react-icons/fa";

// // Classic method

// export default function Modal() {
//   const { isModalOpen, setIsModalOpen } = useContext(AppContext);

//   return (
//     <div className={isModalOpen ? `modal-overlay show-modal` : `modal-overlay`}>
//       <div className="modal-container">
//         <h3>modal content</h3>
//          <p>useContext hook function solution</p>
//         <button
//           className="close-modal-btn"
//           onClick={() => setIsModalOpen(!isModalOpen)}
//         >
//           <FaTimes />
//         </button>
//       </div>
//     </div>
//   );
// }

//------------------------------------------------------

// John's method

import { FaTimes } from "react-icons/fa";
import { useAppContext } from "./../context/AppContext";

export default function Modal() {
  const { isModalOpen, setIsModalOpen } = useAppContext();

  return (
    <div className={isModalOpen ? `modal-overlay show-modal` : `modal-overlay`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <p>useContext hook function solution</p>
        <button
          className="close-modal-btn"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

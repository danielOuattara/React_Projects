// import logo from "./../logo.svg";
// import { FaTimes } from "react-icons/fa";
// import { social, links } from "../data";
// import { useContext } from "react";
// import { AppContext } from "./../context/AppContext";

// export default function Sidebar() {
//   const { isSideBarOpen, setIsSideBarOpen } = useContext(AppContext);
//   return (
//     <aside className={isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
//       <div className="sidebar-header">
//         <img src={logo} alt="coding addict" className="logo" />
//         <button
//           className="close-btn"
//           onClick={() => setIsSideBarOpen(!isSideBarOpen)}
//         >
//           <FaTimes />
//         </button>
//       </div>
//       <ul className="links">
//         {links.map((item) => (
//           <li key={item.id}>
//             {" "}
//             <a href={item.url}>
//               {item.icon}
//               {item.text}
//             </a>
//           </li>
//         ))}
//       </ul>
//       <ul className="social-icons">
//         {social.map((item) => (
//           <li key={item.id}>
//             <a href={item.url}>{item.icon}</a>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// }

//------------------------------------------------------

// John's method

import logo from "./../logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../data";
import { useAppContext } from "./../context/AppContext";

export default function Sidebar() {
  const { isSideBarOpen, setIsSideBarOpen } = useAppContext();
  return (
    <aside className={isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button
          className="close-btn"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((item) => (
          <li key={item.id}>
            {" "}
            <a href={item.url}>
              {item.icon}
              {item.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-icons">
        {social.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

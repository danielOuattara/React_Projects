/* Comment:

How to smoothly toggle links:

1- dynamic class with animation
  <div className={showLinks ? "links-container show-container" :"links-container"}>

  But the "show-container" class has a limitation: 10rem height hard coded. 
  How to handle case where links quantity could change, so the height 
  of the links panel ?

2- "useRef" + DOM "getBoundingClientRect()" method to handle the 
    previous situation


------------------------------------------- */

import { useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./../data";
import logo from "./../logo.svg";
import { useNavbarContext } from "../context/NavbarContext";
import { setShowLinks } from "../reducer/navbarActions";

export default function Navbar(props) {
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  const { showLinks, dispatchNavbar } = useNavbarContext();

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect();

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight.height}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        {/* ---------------------------------------------------- */}
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => dispatchNavbar(setShowLinks(!showLinks))}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((item) => (
              <li key={item.id}>
                <a href={item.url}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* ---------------------------------------------------- */}
        <ul className="social-icons">
          {social.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        {/* ---------------------------------------------------- */}
      </div>
    </nav>
  );
}

/* Comment:

How to smoothly toggle links:

1- dynamic class with animation
  <div className={showLinks ? "links-container show-container" :"links-container"}>

  But the "show-container" class has a limitation: 10rem hard coded. 
  How to handle case where links quantity could change, so the height 
  of the links panel ?

2- "useRef" + DOM "getBoundingClientRect()" method  to handle the 
    previous situation


------------------------------------------- */

import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./../data";
import logo from "./../logo.svg";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect();
    // console.log("showLinks = ", showLinks);
    // console.log("linksHeight= ", linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight.height}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }

    return () => {};
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        {/* ---------------------------------------------------- */}
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
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

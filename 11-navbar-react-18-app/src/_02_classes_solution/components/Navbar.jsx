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

import { Component, createRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./../data";
import logo from "./../logo.svg";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLinks: false,
    };
    this.linksContainerRef = createRef(null);
    this.linksRef = createRef(null);
  }

  componentDidUpdate(prevProps, prevState) {
    const linksHeight = this.linksRef.current.getBoundingClientRect();
    // console.log("showLinks = ", showLinks);
    // console.log("linksHeight= ", linksHeight);
    if (this.state.showLinks) {
      this.linksContainerRef.current.style.height = `${linksHeight.height}px`;
    } else {
      this.linksContainerRef.current.style.height = "0px";
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-center">
          {/* ---------------------------------------------------- */}
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button
              className="nav-toggle"
              onClick={() =>
                this.setState({ showLinks: !this.state.showLinks })
              }
            >
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={this.linksContainerRef}>
            <ul className="links" ref={this.linksRef}>
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
}

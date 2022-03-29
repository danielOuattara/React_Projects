import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./../data";
import logo from "./../logo.svg";

export default class NavbarClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLinks: false,
    };
    this.linksContainerRef = React.createRef(null);
    this.linksRef = React.createRef(null);
  }

  componentDidUpdate(prevState) {
    if (prevState.showLinks !== this.state.showLinks) {
      const linksHeight = this.linksRef.current.getBoundingClientRect();
      if (this.state.showLinks) {
        this.linksContainerRef.current.style.height = `${linksHeight.height}px`;
      } else {
        this.linksContainerRef.current.style.height = "0px";
      }
      console.log(this.linksContainerRef.current);
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-center">
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
              {links.map((item) => {
                const { id, url, text } = item;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

import { Component } from "react";
import { NavbarContext } from "./context/NavbarContext";
import NavbarContextProvider from "./context/NavbarContext";
import Navbar from "./components/Navbar";

export default class AppClassContextAPI extends Component {
  render() {
    return (
      <NavbarContextProvider>
        <NavbarContext.Consumer>
          {(context) => {
            return (
              <>
                <p className="title">context API + classes solution</p>
                <Navbar
                  showLinks={context.showLinks}
                  setShowLinks={context.setShowLinks}
                />
              </>
            );
          }}
        </NavbarContext.Consumer>
      </NavbarContextProvider>
    );
  }
}

import { Component } from "react";
import { createContext } from "react";

export const NavbarContext = createContext();

export default class NavbarContextProvider extends Component {
  state = {
    showLinks: false,
  };

  setShowLinks = () => {
    return this.setState((prevState) => ({
      showLinks: !prevState.showLinks,
    }));
  };
  render() {
    return (
      <NavbarContext.Provider
        value={{
          showLinks: this.state.showLinks,
          setShowLinks: this.setShowLinks,
        }}
      >
        {this.props.children}
      </NavbarContext.Provider>
    );
  }
}

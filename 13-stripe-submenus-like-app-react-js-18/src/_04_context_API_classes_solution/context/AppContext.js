import { Component, createContext } from "react";

export const AppContext = createContext();

export default class AppContextProvider extends Component {
  state = {
    isSideBarOpen: false,
    isSubMenuOpen: false,
    subMenuLocation: {
      subMenuCenterPosition: 0,
      subMenuTopPosition: 0,
    },
    subMenuPageShown: {
      page: "",
      links: [],
    },
  };

  setSubMenuPageShown = () => {
    this.setState((prevState) => ({
      ...prevState,
      isSideBarOpen: !prevState.isSideBarOpen,
    }));
  };
  setIsSideBarOpen = () => {
    this.setState((prevState) => ({
      ...prevState,
      isSideBarOpen: !prevState.isSideBarOpen,
    }));
  };

  setSubMenuLocation = () => {
    this.setState((prevState) => ({
      ...prevState,
      isSideBarOpen: !prevState.isSideBarOpen,
    }));
  };

  setIsSubMenuOpen = () => {
    this.setState((prevState) => ({
      ...prevState,
      isSideBarOpen: !prevState.isSideBarOpen,
    }));
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          isSideBarOpen: this.state.isSideBarOpen,
          isSubMenuOpen: this.state.isSubMenuOpen,
          subMenuLocation: this.state.subMenuLocation,
          subMenuPageShown: this.state.isSideBarOpen,
          setSubMenuPageShown: this.setSubMenuPageShown,
          setIsSideBarOpen: this.setIsSideBarOpen,
          setSubMenuLocation: this.setSubMenuLocation,
          setIsSubMenuOpen: this.setIsSubMenuOpen,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

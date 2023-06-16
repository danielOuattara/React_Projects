import { Component, createContext } from "react";

export const SubMenuContext = createContext();

export default class SubMenuContextProvider extends Component {
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

  setIsSideBarOpen = (booleanArg) => {
    this.setState((prevState) => ({
      ...prevState,
      isSideBarOpen: booleanArg,
    }));
  };

  setIsSubMenuOpen = (booleanArg) => {
    this.setState((prevState) => ({
      ...prevState,
      isSubMenuOpen: booleanArg,
    }));
  };

  setSubMenuLocation = (objectArg) => {
    this.setState((prevState) => ({
      ...prevState,
      subMenuLocation: {
        ...prevState.subMenuLocation,
        subMenuCenterPosition: objectArg.subMenuCenterPosition,
        subMenuTopPosition: objectArg.subMenuTopPosition,
      },
    }));
  };

  setSubMenuPageShown = (objectArg) => {
    this.setState((prevState) => ({
      ...prevState,
      subMenuPageShown: {
        ...prevState.subMenuPageShown,
        page: objectArg.page,
        links: objectArg.links,
      },
    }));
  };

  render() {
    return (
      <SubMenuContext.Provider
        value={{
          isSideBarOpen: this.state.isSideBarOpen,
          isSubMenuOpen: this.state.isSubMenuOpen,
          subMenuLocation: this.state.subMenuLocation,
          subMenuPageShown: this.state.subMenuPageShown,
          setSubMenuPageShown: this.setSubMenuPageShown,
          setIsSideBarOpen: this.setIsSideBarOpen,
          setSubMenuLocation: this.setSubMenuLocation,
          setIsSubMenuOpen: this.setIsSubMenuOpen,
        }}
      >
        {this.props.children}
      </SubMenuContext.Provider>
    );
  }
}

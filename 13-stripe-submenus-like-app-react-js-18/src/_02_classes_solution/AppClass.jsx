import { Component } from "react";
import { Hero, Navbar, Sidebar, Submenu } from "./components";

export default class AppClass extends Component {
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

  setIsSideBarOpen = (booleanArg) =>
    this.setState({ isSideBarOpen: booleanArg });

  setIsSubMenuOpen = (booleanArg) =>
    this.setState({ isSubMenuOpen: booleanArg });

  setSubMenuLocation = (objectArg) => {
    this.setState((prevState) => ({
      ...prevState,
      subMenuLocation: {
        ...prevState.subMenuLocation,
        subMenuCenterPosition: objectArg["subMenuCenterPosition"],
        subMenuTopPosition: objectArg["subMenuTopPosition"],
      },
    }));
  };

  setSubMenuPageShown = (objectArg) => {
    this.setState((prevState) => ({
      ...prevState,
      subMenuPageShown: {
        ...prevState.subMenuPageShown,
        page: objectArg["page"],
        links: objectArg["links"],
      },
    }));
  };

  render() {
    return (
      <>
        <Navbar
          setIsSubMenuOpen={this.setIsSubMenuOpen}
          setSubMenuLocation={this.setSubMenuLocation}
          setSubMenuPageShown={this.setSubMenuPageShown}
          setIsSideBarOpen={this.setIsSideBarOpen}
        />
        <Sidebar
          isSideBarOpen={this.state.isSideBarOpen}
          setIsSideBarOpen={this.setIsSideBarOpen}
        />
        <Hero setIsSubMenuOpen={this.setIsSubMenuOpen} />
        <Submenu
          isSubMenuOpen={this.state.isSubMenuOpen}
          subMenuPageShown={this.state.subMenuPageShown}
          subMenuLocation={this.state.subMenuLocation}
        />
      </>
    );
  }
}

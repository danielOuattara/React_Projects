import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";

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
      <>
        <p style={{ textAlign: "center" }}> classes solution</p>
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
          setSubMenuPageShown={this.setSubMenuPageShown}
          subMenuLocation={this.state.subMenuLocation}
          setSubMenuLocation={this.setSubMenuLocation}
        />
      </>
    );
  }
}

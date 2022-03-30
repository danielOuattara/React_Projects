import React from "react";
import sublinks from "./../data";

export const AppContext = React.createContext();

export default class AppContextProviderClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarOpen: false,
      subMenuOpen: false,
      subMenuLocation: {
        centerPosition: "",
        topPosition: "",
      },
      subMenuPageShown: { page: "", links: [] },
    };
  }

  handleSetSideBarOpen = (value) => {
    this.setState({ sideBarOpen: value });
  };

  handleSetSubMenuOpen = (value) => {
    this.setState({ subMenuOpen: value });
  };

  handleSetSubMenuLocation = (value1, value2) => {
    this.setState({
      subMenuLocation: {
        centerPosition: value1,
        topPosition: value2,
      },
    });
  };

  handleSetSubMenuPageShown = (value) => {
    this.setState({ subMenuPageShown: value });
  };

  render() {
    console.log(this.state.subMenuLocation);
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          handleSetSideBarOpen: this.handleSetSideBarOpen,
          handleSetSubMenuOpen: this.handleSetSubMenuOpen,
          handleSetSubMenuLocation: this.handleSetSubMenuLocation,
          handleSetSubMenuPageShown: this.handleSetSubMenuPageShown,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

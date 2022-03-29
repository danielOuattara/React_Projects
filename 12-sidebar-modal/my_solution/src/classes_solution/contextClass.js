import React, { Component } from "react";

const ToggleContext = React.createContext();

class ToggleClassContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: false,
      showModal: false,
    };
  }

  toggleModal = () => {
    return this.setState({ showModal: !this.state.showModal });
  };

  toggleSideBar = () => {
     return this.setState({ showSideBar: !this.state.showSideBar });
  };

  render() {
    return (
      <ToggleContext.Provider
        value={{
          showModal: this.state.showModal,
          showSideBar: this.state.showSideBar,
          toggleModal: this.toggleModal,
          toggleSideBar: this.toggleSideBar,
        }}
      >
        {this.props.children}
      </ToggleContext.Provider>
    );
  }
}

export { ToggleContext, ToggleClassContextProvider };

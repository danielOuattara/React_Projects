import { Component, createContext } from "react";

export const AppContext = createContext();

export default class AppContextProvider extends Component {
  state = {
    isSideBarOpen: false,
    isModalOpen: false,
  };

  toggleModal = () =>
    this.setState((prevState) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));

  toggleSideBar = () => {
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
          toggleSideBar: this.toggleSideBar,
          isModalOpen: this.state.isModalOpen,
          toggleModal: this.toggleModal,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

import { Component, createContext } from "react";

export const SidebarContext = createContext();

export default class SidebarContextProvider extends Component {
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
      <SidebarContext.Provider
        value={{
          isSideBarOpen: this.state.isSideBarOpen,
          toggleSideBar: this.toggleSideBar,
          isModalOpen: this.state.isModalOpen,
          toggleModal: this.toggleModal,
        }}
      >
        {this.props.children}
      </SidebarContext.Provider>
    );
  }
}

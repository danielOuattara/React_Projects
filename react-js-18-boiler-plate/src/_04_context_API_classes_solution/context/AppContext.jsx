import { Component, createContext } from "react";
//---------------------------------------------------

export const AppContext = createContext();

export default class AppContextProvider extends Component {
  state = {};

  //---------------

  render() {
    return (
      <AppContext.Provider value={{}}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

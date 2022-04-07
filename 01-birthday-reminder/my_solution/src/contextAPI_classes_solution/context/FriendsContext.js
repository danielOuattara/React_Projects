import React, { Component, createContext } from "react";
import data from "../../data";

export const FriendsContext = createContext();

class FriendsContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data,
    };
  }

  handleRemoveOnePerson = (id) => {
    this.setState(() => {
      return { people: this.state.people.filter((person) => person.id !== id) };
    });
  };

  handleRemoveAllPeople = () => {
    this.setState({ people: [] });
  };

  handleRefresh = () => {
    window.location.reload(false);
  };
  render() {
    return (
      <div>
        <FriendsContext.Provider
          value={{
            people: this.state.people,
            handleRemoveOnePerson: this.handleRemoveOnePerson,
            handleRefresh: this.handleRefresh,
            handleRemoveAllPeople: this.handleRemoveAllPeople,
          }}
        >
          {this.props.children}
        </FriendsContext.Provider>
      </div>
    );
  }
}

export default FriendsContextProvider;

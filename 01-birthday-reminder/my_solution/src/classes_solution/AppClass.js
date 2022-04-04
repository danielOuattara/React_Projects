import React, { Component } from "react";
import data from "./../data";
import List from "./ListClass";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data,
    };
  }

  // handleRemoveOnePerson = (id) => {  // OK !
  //   let newPerson = this.state.people.filter( person => person.id !== id)
  //   this.setState({ //
  //     people: newPerson
  //   });
  // }

  // handleRemoveOnePerson = (id) => {  // OK !
  //   this.setState((prevState) => ({
  //     people: prevState.people.filter(person => person.id !== id)
  //   }));
  // }

  handleRemoveOnePerson = (id) => {
    // OK !
    return this.setState((prevState) => {
      return { people: prevState.people.filter((person) => person.id !== id) };
    });
  };

  handleRefresh = () => {
    window.location.reload(false);
  };

  render() {
    return (
      <main>
        <section className="container">
          <h3>{this.state.people.length} birthdays today</h3>{" "}
          <span>class component</span>
          <List
            people={this.state.people}
            handleRemoveOnePerson={this.handleRemoveOnePerson}
          />
          {this.state.people.length !== 0 && (
            <button
              onClick={() => this.setState({ people: [] })}
              style={{ marginTop: "50px" }}
            >
              {" "}
              Clear all
            </button>
          )}
          {this.state.people.length === 0 && (
            <button onClick={this.handleRefresh} style={{ marginTop: "50px" }}>
              {" "}
              Refresh
            </button>
          )}
        </section>
      </main>
    );
  }
}

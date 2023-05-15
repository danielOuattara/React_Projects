import { Component } from "react";
import data from "../data";
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
      return {
        people: prevState.people.filter((person) => person.id !== id),
      };
    });
  };

  // ----------------------------------

  // handleRefresh = () => this.setState({ people: data });

  // handleRefresh = () => {
  //   this.setState({
  //     people: data,
  //   });
  // };

  handleRefresh = () => this.setState(() => ({ people: data }));

  render() {
    return (
      <main>
        <section className="container">
          <span>classes solution</span>
          {this.state.people.length > 1 && (
            <h3>{this.state.people.length} birthdays today</h3>
          )}
          {(this.state.people.length === 1 ||
            this.state.people.length === 0) && (
            <h3>{this.state.people.length} birthday today</h3>
          )}
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
            <button onClick={this.handleRefresh}> Refresh</button>
          )}
        </section>
      </main>
    );
  }
}

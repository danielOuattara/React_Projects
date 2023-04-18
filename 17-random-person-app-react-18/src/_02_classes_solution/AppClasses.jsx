import { Component } from "react";
import iconsListData from "./components/Icons";
import dataParser from "./utilities/dataParser.js";

const url = "https://randomuser.me/api/";

export default class AppClasses extends Component {
  state = {
    isLoading: true,
    person: null,
    infoTitle: "name",
    infoValue: null,
    continueFetching: true,
  };

  fetchPerson = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status}`);
      }

      const data = await response.json();
      const person = data.results[0];
      const newPerson = dataParser(person);
      this.setState((prevState) => ({
        ...prevState,
        person: newPerson,
        infoValue: newPerson.name,
        isLoading: false,
      }));
    } catch (error) {
      this.setState((prevState) => ({ ...prevState, isLoading: false }));
      console.log(error.message);
    }
  };

  componentDidMount() {
    this.fetchPerson();
  }

  handleInfo = (event) => {
    event.preventDefault();
    if (event.target.classList.contains("icon")) {
      this.setState((prevState) => ({
        ...prevState,
        infoTitle: event.target.dataset.label,
        infoValue: this.state.person[event.target.dataset.label],
      }));
    }
  };

  render() {
    return (
      <>
        <main>
          <div className="block bcg-black">
            <br /> <hr /> <br />
            <p style={{ textAlign: "center", color: "white" }}>
              classes solution
            </p>
          </div>
          <div className="block">
            <div className="container">
              {this.state.isLoading && (
                <>
                  <img src="" alt="" className="user-img" />
                  <p className="user-title">Loading...</p>
                  <p className="user-value">Loading ...</p>
                </>
              )}

              {!this.state.isLoading && (
                <>
                  <img
                    src={this.state.person.image}
                    alt=""
                    className="user-img"
                  />

                  <p className="user-title">
                    {this.state.infoTitle === "name"
                      ? `Hi, My ${this.state.infoTitle} is`
                      : `My ${this.state.infoTitle} is`}
                  </p>
                  <p className="user-value">{this.state.infoValue}</p>
                </>
              )}

              <div className="values-list">
                {iconsListData.map((item) => (
                  <button
                    key={item.id}
                    className="icon"
                    data-label={item["data-label"]}
                    onMouseOver={this.handleInfo}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
              <button className="btn" type="button" onClick={this.fetchPerson}>
                {this.state.isLoading ? "isLoading..." : "random user"}
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }
}

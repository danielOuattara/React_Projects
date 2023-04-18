//------------------------- OK !

import { Article } from "./components";
import data from "./../data";
import { Component } from "react";

const getThemeFromLocalStorage = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

export default class AppClasses extends Component {
  state = {
    theme: getThemeFromLocalStorage(),
  };

  toggleTheme = () => {
    this.state.theme === "light-theme"
      ? this.setState({ theme: "dark-theme" })
      : this.setState({ theme: "light-theme" });
    return localStorage.setItem("theme", this.state.theme);
  };

  userTheme = localStorage.getItem("theme");

  componentDidUpdate(prevProps, prevState) {
    if (this.state.theme !== prevState.theme) {
      document.documentElement.className = this.state.theme;
    }
  }

  render() {
    console.log("this = ", this);
    console.log("this.userTheme = ", this.userTheme);
    return (
      <>
        <br /> <hr /> <br />
        <p style={{ textAlign: "center" }}>function solution version</p>
        <main>
          <nav>
            <div className="nav-center">
              <h1>over reacted</h1>
              <button className="btn" onClick={this.toggleTheme}>
                toggle
              </button>
            </div>
          </nav>
          <section className="articles">
            {data.map((item) => (
              <Article key={item.id} {...item} />
            ))}
          </section>
        </main>
      </>
    );
  }
}

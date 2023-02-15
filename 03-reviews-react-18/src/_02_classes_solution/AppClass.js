import { Component } from "react";
import ReviewClass from "./ReviewClass";

export default class AppClass extends Component {
  render() {
    return (
      <main>
        <section className="container">
          <div className="title">
            <h2> our reviews</h2>
            <h4>class component</h4>
            <div className="underline"></div>
          </div>
          <ReviewClass />
        </section>
      </main>
    );
  }
}

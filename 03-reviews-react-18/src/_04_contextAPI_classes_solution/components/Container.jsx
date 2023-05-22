import { Component } from "react";
import ReviewsClass from "./ReviewsClass";

export default class Container extends Component {
  render() {
    return (
      <main>
        <section className="container">
          <div className="title">
            <h2> our reviews</h2>
            <p>context API + classes component solutions</p>
            <div className="underline"></div>
          </div>
          <ReviewsClass />
        </section>
      </main>
    );
  }
}

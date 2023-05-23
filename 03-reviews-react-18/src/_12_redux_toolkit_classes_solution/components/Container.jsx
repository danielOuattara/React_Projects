import { Component } from "react";
import Reviews from "./Reviews";

export default class Container extends Component {
  render() {
    return (
      <main>
        <section className="container">
          <div className="title">
            <h2> our reviews</h2>
            <p>redux toolkit + classes solution</p>
            <div className="underline"></div>
          </div>
          <Reviews />
        </section>
      </main>
    );
  }
}

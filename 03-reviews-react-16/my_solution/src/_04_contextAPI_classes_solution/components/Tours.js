import React, { Component } from "react";
import TourItem from "./TourItem";
import { ToursContext } from "../context/ToursContext";

export default class ToursClass extends Component {
  static contextType = ToursContext;
  render() {
    const { tours } = this.context;
    return (
      <main>
        <section>
          <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
            <div>
              {tours.map((item) => {
                return <TourItem key={item.id} {...item} />;
              })}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

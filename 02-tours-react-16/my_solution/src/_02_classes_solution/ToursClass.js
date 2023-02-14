import React, { Component } from "react";
import TourItemClass from "./TourItemClass";

export default class ToursClass extends Component {
  render() {
    const { tours, removeTourItem } = this.props;
    return (
      <main>
        <section>
          <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
            <div>
              {tours.map((item) => {
                return (
                  <TourItemClass
                    key={item.id}
                    {...item}
                    removeTourItem={removeTourItem}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

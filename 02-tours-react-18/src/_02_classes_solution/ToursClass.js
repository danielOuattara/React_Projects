import { Component } from "react";
import TourItemClass from "./TourItemClass";

export default class ToursClass extends Component {
  render() {
    const { tours, removeTourItem } = this.props;
    return (
      <main>
        <section>
          <div className="title">
            <h2>ours tours</h2>
            <div className="underline"></div>
            <div>
              {tours.map((tourItem) => {
                return (
                  <TourItemClass
                    key={tourItem.id}
                    {...tourItem}
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
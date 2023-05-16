import { Component } from "react";
import TourItemFunction from "./TourItemFunction";
import { connect } from "react-redux";

class ToursClass extends Component {
  render() {
    return (
      <main>
        <section>
          <div className="title">
            <p>react redux toolkit + classes solution</p>
            <h2>our tours</h2>
            <div className="underline"></div>
            <div>
              {this.props.tours.map((item) => {
                return <TourItemFunction key={item.id} {...item} />;
              })}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return { tours: state.tours.tours };
};

export default connect(mapStateToProps)(ToursClass);

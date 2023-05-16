import TourItemFunction from "./TourItemFunction";
import { connect } from "react-redux";

function Tours(props) {
  return (
    <main>
      <section>
        <div className="title">
          <p>react redux functions solution</p>
          <h2>our tours</h2>
          <div className="underline"></div>
          <div>
            {props.state.tours.map((item) => {
              return <TourItemFunction key={item.id} {...item} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(Tours);

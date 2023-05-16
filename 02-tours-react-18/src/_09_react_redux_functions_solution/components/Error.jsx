import { connect } from "react-redux";

function Error(props) {
  return (
    <main>
      <div className="title">
        <h2>{props.state.errorMessage}</h2>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(Error);

import { Component } from "react";
import { connect } from "react-redux";

class Error extends Component {
  render() {
    return (
      <main>
        <div className="title">
          <h2>{this.props.tours.errorMessage}</h2>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return { tours: state.tours };
};

export default connect(mapStateToProps)(Error);

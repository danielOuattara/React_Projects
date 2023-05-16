import { Component } from "react";
import { connect } from "react-redux";

class Error extends Component {
  render() {
    return (
      <main>
        <div className="title">
          <h2>{this.props.state.errorMessage}</h2>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(Error);

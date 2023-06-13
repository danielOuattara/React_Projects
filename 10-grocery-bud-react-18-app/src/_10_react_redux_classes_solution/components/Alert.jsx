import { Component } from "react";
import { showAlert } from "./../redux/grocery/groceryActions";
import { connect } from "react-redux";

class Alert extends Component {
  timeoutID = "";
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.alert !== this.props.alert &&
      this.props.alert.show === true
    ) {
      this.timeoutID = setTimeout(() => {
        return this.props.dispatch(showAlert());
      }, 1000);
    }
  }

  componentWillUnmount() {
    return clearTimeout(this.timeoutID);
  }

  render() {
    return (
      <p className={`alert alert-${this.props.alert.type}`}>
        {this.props.alert.msg}
      </p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alert: state.groceryState.alert,
  };
};

export default connect(mapStateToProps, null)(Alert);

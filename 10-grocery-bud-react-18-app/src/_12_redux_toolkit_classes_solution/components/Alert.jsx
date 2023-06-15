import { Component } from "react";
import { groceryActions } from "./../redux/grocery/grocery-slice";
import { connect } from "react-redux";

class Alert extends Component {
  timeoutID = "";
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.alert !== this.props.alert &&
      this.props.alert.show === true
    ) {
      this.timeoutID = setTimeout(() => {
        return this.props.dispatch(groceryActions.showAlert());
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

import { PureComponent } from "react";

export default class Alert extends PureComponent {
  timeoutID = "";

  componentDidUpdate(prevProps, prevState) {
    if (this.props.alert.show === true) {
      this.timeoutID = setTimeout(() => {
        return this.props.showAlert();
      }, 1500);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutID);
  }

  render() {
    return (
      <p className={`alert alert-${this.props.alert.type}`}>
        {this.props.alert.msg}
      </p>
    );
  }
}

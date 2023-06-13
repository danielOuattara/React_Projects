import { useEffect } from "react";
import { showAlert } from "./../redux/grocery/groceryActions";
import { connect } from "react-redux";

function Alert({ alert, dispatch }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (alert.show === true) {
        return dispatch(showAlert());
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert.show, dispatch]);

  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
}

const mapStateToProps = (state) => {
  return {
    alert: state.groceryState.alert,
  };
};

export default connect(mapStateToProps, null)(Alert);

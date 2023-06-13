import { useEffect } from "react";
import { groceryActions } from "./../redux/grocery/grocery-slice";
import { useSelector, useDispatch } from "react-redux";

export default function Alert() {
  const { alert } = useSelector((state) => state.groceryState);
  const dispatch = useDispatch();
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (alert.show === true) {
        return dispatch(groceryActions.showAlert({}));
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert.show, dispatch]);

  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
}

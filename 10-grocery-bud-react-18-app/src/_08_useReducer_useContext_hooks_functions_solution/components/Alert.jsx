import { useEffect } from "react";
import { showAlert } from "../reducer/grocery/groceryActions";
import { useGroceryContext } from "../context/GroceryContext";

function Alert() {
  const { alert, dispatchGrocery } = useGroceryContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (alert.show === true) {
        return dispatchGrocery(showAlert());
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert.show, dispatchGrocery]);

  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
}

export default Alert;

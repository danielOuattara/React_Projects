import { useEffect } from "react";

function Alert({ alert, showAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (alert.show === true) {
        return showAlert();
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert, showAlert]);

  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
}

export default Alert;

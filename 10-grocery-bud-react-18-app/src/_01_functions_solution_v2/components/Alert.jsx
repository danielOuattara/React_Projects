import { useEffect } from "react";

function Alert({ alert, setAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (alert.show === true) {
        return setAlert(() => ({ show: false, msg: "", type: "" }));
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [setAlert, alert]);

  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
}

export default Alert;

import { useEffect } from "react";

function Alert({ alert, setAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (alert.show === true) {
        return setAlert(() => ({
          show: false,
          type: "",
          msg: "",
        }));
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert.show, setAlert]);

  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
}

export default Alert;

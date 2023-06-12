import { useEffect } from "react";

function Alert({ alert, setState }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (alert.show === true) {
        return setState((prevState) => ({
          ...prevState,
          alert: {
            show: false,
            type: "",
            msg: "",
          },
        }));
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert.show, setState]);

  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
}

export default Alert;

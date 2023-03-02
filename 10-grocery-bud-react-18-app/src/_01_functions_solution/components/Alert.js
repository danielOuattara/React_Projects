import { useEffect } from "react";

export default function Alert({ type, msg, removeAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 1500);
    return () => clearTimeout(timeout);
  }, [removeAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
}

import { useEffect } from "react";

export default function Alert({ type, msg, showAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 1500);
    return () => clearTimeout(timeout);
  }, [showAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
}

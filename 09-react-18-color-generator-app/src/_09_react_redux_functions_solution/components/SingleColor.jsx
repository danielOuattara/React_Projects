import { useState, useEffect } from "react";

export default function SingleColor({ index, listLength, color }) {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => setAlert(false), 750);
    return () => clearTimeout(timeOut);
  }, [alert]);

  const handleCopyToClipBoard = () => {
    setAlert(true);
    navigator.clipboard.writeText(color.hexString());
  };

  return (
    <article
      onClick={handleCopyToClipBoard}
      className={index >= listLength / 2 ? "color-light color" : "color"}
      style={{ backgroundColor: `${color.hexString()}` }}
    >
      <p className="percent-value">{color.weight} %</p>
      <p className="color-value">{color.hexString()}</p>
      {alert && (
        <span
          className={index >= listLength / 2 ? "alert-light alert" : "alert"}
        >
          copied to clipboard
        </span>
      )}
    </article>
  );
}

import React, { useState, useEffect } from "react";

function SingleColorFunction({
  rgb,
  weight,
  index,
  hexColorString,
  listLength,
}) {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => setAlert(false), 1500);
    return () => clearTimeout(timeOut);
  }, [alert]);

  const handleCopyToClipBoard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexColorString);
  };

  return (
    <article
      onClick={handleCopyToClipBoard}
      className={index > listLength / 2 ? "color-light color" : "color"}
      style={{ backgroundColor: `${hexColorString}` }}
    >
      <p className="percent-value">{weight} %</p>
      <p className="color-value">{hexColorString}</p>
      {alert && (
        <p className={index > listLength / 2 ? "alert-light alert" : "alert"}>
          copied to clipboard
        </p>
      )}
    </article>
  );
}

export default SingleColorFunction;

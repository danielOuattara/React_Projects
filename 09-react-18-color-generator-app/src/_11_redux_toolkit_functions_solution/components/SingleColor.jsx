import { useState, useEffect } from "react";
import rgbToHex from "./../../utils";

export default function SingleColor({ index, listLength, color, rgb }) {
  const [alert, setAlert] = useState(false);
  const hexValue = rgbToHex(...color.rgb);
  // const hexValue = `#${color.hex}`;

  useEffect(() => {
    const timeOut = setTimeout(() => setAlert(false), 750);
    return () => clearTimeout(timeOut);
  }, [alert]);

  const handleCopyToClipBoard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  return (
    <article
      onClick={handleCopyToClipBoard}
      className={index >= listLength / 2 ? "color-light color" : "color"}
      style={{ backgroundColor: `${hexValue}` }}
    >
      <p className="percent-value">{color.weight} %</p>
      <p className="color-value">{hexValue}</p>
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
